import * as Router from "falcor-router";
import * as moment from "moment";
import { PathValue, Range, ref } from "falcor-json-graph";
import { Site, Sermon, Event } from './wordpress';
import { assert, pathValue } from './debug';
import {EsvApi} from './esvapi';

const LONG_DATE = 'dddd, MMMM D, YYYY';

const wp = new Site('https://api.compasshb.com/wp-json/wp/v2');
const reading = new Site('https://api.compasshb.com/reading/wp-json/wp/v2', 8);
// TODO(ewinslow): Fail the prod server if this env is not available
const esvApi = new EsvApi(process.env.ESV_API_KEY);

function getEventPaths(event: Event) {
  return [
    pathValue(['events', 'bySlug', event.slug, 'coverImage'], () => event._embedded['wp:featuredmedia'][0].source_url, ''),
    pathValue(['events', 'bySlug', event.slug, 'description'], () => event.content.rendered),
    pathValue(['events', 'bySlug', event.slug, 'endTime'], () => moment(event._EventEndDate).format(LONG_DATE)),
    pathValue(['events', 'bySlug', event.slug, 'slug'], () => event.slug),
    pathValue(['events', 'bySlug', event.slug, 'startTime'], () => moment(event._EventStartDate).format(LONG_DATE)),
    pathValue(['events', 'bySlug', event.slug, 'title'], () => event.title.rendered),
  ];
}

function getPassagePaths(passage: Sermon) {
  return [
    pathValue(['passages', 'bySlug', passage.slug, 'id'], () => passage.id),
    pathValue(['passages', 'bySlug', passage.slug, 'overview'], () => passage.content.rendered),
    pathValue(['passages', 'bySlug', passage.slug, 'slug'], () => passage.slug),
    pathValue(['passages', 'bySlug', passage.slug, 'title'], () => passage.title.rendered),
  ];
}

function getSermonPaths(sermon: Sermon) {
  return [
    pathValue(['sermons', 'bySlug', sermon.slug, 'content'], () => sermon.content.rendered),
    pathValue(['sermons', 'bySlug', sermon.slug, 'coverImage'], () => sermon._embedded['wp:featuredmedia'][0].source_url, ''),
    pathValue(['sermons', 'bySlug', sermon.slug, 'date'], () => moment(sermon.date).format(LONG_DATE)),
    pathValue(['sermons', 'bySlug', sermon.slug, 'slug'], () => sermon.slug),
    pathValue(['sermons', 'bySlug', sermon.slug, 'teacher'], () => sermon._embedded.author[0].name),
    pathValue(['sermons', 'bySlug', sermon.slug, 'text'], () => sermon.acf.text),
    pathValue(['sermons', 'bySlug', sermon.slug, 'title'], () => sermon.title.rendered),
  ];
}


export const router = new Router([
  {
    route: 'people.byId[{integers:ids}]["name","slug"]',
    async get([, , ids, props]: [any, any, Array<number>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var id of ids) {
        await (async function() {
          const person = await wp.getUser(id);
          results.push(...[
            pathValue(['people', 'byId', id, 'name'], () => person.name),
            pathValue(['people', 'byId', id, 'slug'], () => person.slug),
          ]);
        })();
      }

      return Promise.all(results);
    },
  },
  {
    route: 'events.featured[{ranges}]',
    async get([, , ranges]: any): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var {from, to} of ranges) {
        await (async function() {
          const events = await wp.getFeaturedEvents({ offset: from, limit: to - from + 1 });
          events.forEach((event, i) => {
            results.push(pathValue(['events', 'featured', from + i], () => ref(['events', 'bySlug', event.slug])));
            results.push(...getEventPaths(event));
          });
        })();
      }

      return Promise.all(results);
    },
  },
  {
    route: 'events.featured.length',
    async get(pathSets: any): Promise<Array<PathValue>> {
      return [{
        path: ['events', 'featured', 'length'],
        value: await wp.getFeaturedEventsCount(),
      }];
    },
  },
  {
    route: 'events.upcoming[{ranges}]',
    async get([, , ranges]: [any,any,Array<Range>]): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var {from = 0, to} of ranges) {
        await (async function() {
          const events = await wp.getUpcomingEvents({ offset: from, limit: to - from + 1 });
          events.forEach((event, i) => {
            results.push(pathValue(['events', 'upcoming', from + i], () => ref(['events', 'bySlug', event.slug])));
            results.push(...getEventPaths(event));
          });
        })();
      }

      return Promise.all(results);
    },
  },
  {
    route: 'events.upcoming.length',
    async get(pathSets: any): Promise<Array<PathValue>> {
      return [{
        path: ['events', 'upcoming', 'length'],
        value: await wp.getUpcomingEventsCount(),
      }];
    },
  },
  {
    route: 'events.bySlug[{keys}]["coverImage","description","endTime","slug","startTime","title"]',
    async get([, , slugs, props]: [any, any, Array<string>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var slug of slugs) {
        await (async function() {
          const event = await wp.getEventBySlug(slug);

          results.push(...getEventPaths(event));
        })();
      }

      return Promise.all(results);
    }
  },
  {
    route: 'series.recent[{ranges:ranges}]',
    async get(pathSets: any): Promise<Array<PathValue>> {
      // Series are "tags" in WP: https://api.compasshb.com/wp-json/wp/v2/tags?embed
      return [];
    },
  },
  {
    route: 'series.recent.length',
    async get(): Promise<Array<PathValue>> {
      return [
        { path: ['series', 'recent', 'length'], value: 0 },
      ];
    },
  },
  {
    route: 'series.bySlug[{keys}]["title","description","coverImage","slug"]',
    async get([, , slugs, props]: any): Promise<Array<PathValue>> {
      // Series are "tags" in WP: https://api.compasshb.com/wp-json/wp/v2/tags?embed&slug={slug}
      return [];
    },
  },
  {
    route: 'sermons.recent[{ranges:ranges}]',
    async get([, , ranges]: [any, any, Array<Range>]): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var {from = 0, to} of ranges) {
        await (async function() {
          const sermons = await wp.getSermons({ offset: from, limit: to - from + 1 });
          sermons.forEach((sermon, i) => {
            results.push(pathValue(['sermons', 'recent', from + i], () => ref(['sermons', 'bySlug', sermon.slug])));
            results.push(...getSermonPaths(sermon));
          });
        })();
      }

      return Promise.all(results);
    },
  },
  {
    route: 'sermons.recent.length',
    async get(pathSets: any): Promise<Array<PathValue>> {
      return [{
        path: ['sermons', 'recent', 'length'],
        value: await wp.getSermonsCount(),
      }];
    },
  },
  {
    route: 'sermons.bySlug[{keys}]["content","coverImage","date","slug","teacher","text","title"]',
    async get([, , slugs, props]: [any, any, Array<string>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var slug of slugs) {
        await (async function() {
          const sermon = await wp.getSermonBySlug(slug);

          results.push(...getSermonPaths(sermon));
        })();
      }

      return Promise.all(results);
    },
  },
  {
    route: 'pages.bySlug[{keys:slugs}]["content","slug","title"]',
    async get([, , slugs, props]: [any, any, Array<string>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var slug of slugs) {
        await (async function() {
          const page = await wp.getPageBySlug(slug);
          results.push(...[
            pathValue(['pages', 'bySlug', slug, 'content'], () => page.content.rendered),
            pathValue(['pages', 'bySlug', slug, 'slug'], () => page.slug),
            pathValue(['pages', 'bySlug', slug, 'title'], () => page.title.rendered),
          ]);
        })();
      }

      return Promise.all(results);
    },
  },
  {
    route: 'passages.logo["src","width","height"]',
    async get(): Promise<Array<PathValue>> {
      const [src,width,height] = await reading.getLogo();

      return Promise.all([
        pathValue(['passages', 'logo', 'src'], () => src),
        pathValue(['passages', 'logo', 'width'], () => width),
        pathValue(['passages', 'logo', 'height'], () => height),
      ]);
    },
  },
  {
    route: 'passages.recent[{ranges}]',
    async get([,,ranges]: [any, any, Array<Range>]): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var {from = 0, to} of ranges) {
        await (async function() {
          const passages = await reading.getSermons({ offset: from, limit: to - from + 1 });
          passages.forEach((passage, i) => {
            results.push(pathValue(['passages', 'recent', from + i], () => ref(['passages', 'bySlug', passage.slug])));
            results.push(...getPassagePaths(passage));
          });
        })();
      }

      return Promise.all(results);
    },
  },
  {
    route: 'passages.recent.length',
    async get(): Promise<Array<PathValue>> {
      return [{
        path: ['passages', 'recent', 'length'],
        value: await reading.getSermonsCount(),
      }];
    },
  },
  {
    route: 'passages.bySlug[{keys}]["slug","title","content","overview","id","audio"]',
    async get([,,slugs,props]: [any, any, Array<string>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<Promise<PathValue>> = [];

      for (var slug of slugs) {
        await (async function() {
          const passage = await reading.getSermonBySlug(slug);
          results.push(...getPassagePaths(passage));

          const title = passage.title.rendered

          if (props.indexOf('audio') >= 0) {
            results.push(pathValue(['passages', 'bySlug', passage.slug, 'audio'], () => esvApi.getPassageAudio(title)));
          }

          if (props.indexOf('content') >= 0) {
            results.push(pathValue(['passages', 'bySlug', passage.slug, 'content'], () => esvApi.getPassageText(title)));
          }
        })();
      }

      return Promise.all(results);
    },
  },
]);
