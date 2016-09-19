import * as Router from "falcor-router";
import * as moment from "moment";
import { PathValue, Range, ref } from "falcor-json-graph";
import { Site, Sermon } from './wordpress';
import { assert, pathValue } from './debug';

const LONG_DATE = 'dddd, MMMM D, YYYY';

const wp = new Site('https://api.compasshb.com/wp-json/wp/v2');
const reading = new Site('https://api.compasshb.com/reading/wp-json/wp/v2', 8);

function getPassagePaths(passage: Sermon) {
  return [
    pathValue(['passages', 'bySlug', passage.slug, 'id'], () => passage.id),
    pathValue(['passages', 'bySlug', passage.slug, 'overview'], () => passage.content.rendered),
    pathValue(['passages', 'bySlug', passage.slug, 'slug'], () => passage.slug),
    pathValue(['passages', 'bySlug', passage.slug, 'title'], () => passage.title.rendered),
  ];
}

export const router = new Router([
  {
    route: 'people.byId[{integers:ids}]["name","slug"]',
    async get([, , ids, props]: [any, any, Array<number>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      for (var id of ids) {
        await (async function() {
          const person = await wp.getUser(id);
          results.push(...[
            pathValue(['people', 'byId', id, 'name'], () => person.name),
            pathValue(['people', 'byId', id, 'slug'], () => person.slug),
          ]);
        })();
      }

      return results;
    },
  },
  {
    route: 'events.featured[{ranges}]',
    async get([, , ranges]: any): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      for (var {from, to} of ranges) {
        await (async function() {
          const events = await wp.getFeaturedEvents({ offset: from, limit: to - from + 1 });
          events.forEach((event, i) => {
            results.push({
              path: ['events', 'featured', from + i],
              value: ref(['events', 'bySlug', event.slug]),
            });
          });
        })();
      }

      return results;
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
      const results: Array<PathValue> = [];

      for (var {from = 0, to} of ranges) {
        await (async function() {
          const events = await wp.getUpcomingEvents({ offset: from, limit: to - from + 1 });
          events.forEach((event, i) => {
            results.push({
              path: ['events', 'upcoming', from + i],
              value: ref(['events', 'bySlug', event.slug]),
            });
          });
        })();
      }

      return results;
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
      const results: Array<PathValue> = [];

      for (var slug of slugs) {
        await (async function() {
          const event = await wp.getEventBySlug(slug);

          results.push(...[
            pathValue(['events', 'bySlug', slug, 'coverImage'], () => event._embedded['wp:featuredmedia'][0].source_url, ''),
            pathValue(['events', 'bySlug', slug, 'description'], () => event.content.rendered),
            pathValue(['events', 'bySlug', slug, 'endTime'], () => moment(event._EventEndDate).format(LONG_DATE)),
            pathValue(['events', 'bySlug', slug, 'slug'], () => event.slug),
            pathValue(['events', 'bySlug', slug, 'startTime'], () => moment(event._EventStartDate).format(LONG_DATE)),
            pathValue(['events', 'bySlug', slug, 'title'], () => event.title.rendered),
          ]);
        })();
      }

      return results;
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
      const results: Array<PathValue> = [];

      for (var {from = 0, to} of ranges) {
        await (async function() {
          const sermons = await wp.getSermons({ offset: from, limit: to - from + 1 });
          sermons.forEach(({slug}, i) => {
            results.push({
              path: ['sermons', 'recent', from + i],
              value: ref(['sermons', 'bySlug', slug]),
            });
          });
        })();
      }

      return results;
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
      const results: Array<PathValue> = [];

      for (var slug of slugs) {
        await (async function() {
          const sermon = await wp.getSermonBySlug(slug);

          results.push(...[
            pathValue(['sermons', 'bySlug', slug, 'content'], () => sermon.content.rendered),
            pathValue(['sermons', 'bySlug', slug, 'coverImage'], () => sermon._embedded['wp:featuredmedia'][0].source_url, ''),
            pathValue(['sermons', 'bySlug', slug, 'date'], () => moment(sermon.date).format(LONG_DATE)),
            pathValue(['sermons', 'bySlug', slug, 'slug'], () => sermon.slug),
            pathValue(['sermons', 'bySlug', slug, 'teacher'], () => sermon._embedded.author[0].name),
            pathValue(['sermons', 'bySlug', slug, 'text'], () => sermon.acf.text),
            pathValue(['sermons', 'bySlug', slug, 'title'], () => sermon.title.rendered),
          ]);
        })();
      }

      return results;
    },
  },
  {
    route: 'pages.bySlug[{keys:slugs}]["content","slug","title"]',
    async get([, , slugs, props]: [any, any, Array<string>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

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

      return results;
    },
  },
  {
    route: 'passages.logo["src","width","height"]',
    async get(): Promise<Array<PathValue>> {
      const [src,width,height] = await reading.getLogo();

      return [
        pathValue(['passages', 'logo', 'src'], () => src),
        pathValue(['passages', 'logo', 'width'], () => width),
        pathValue(['passages', 'logo', 'height'], () => height),
      ];
    },
  },
  {
    route: 'passages.recent[{ranges}]',
    async get([,,ranges]: [any, any, Array<Range>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      for (var {from = 0, to} of ranges) {
        await (async function() {
          const passages = await reading.getSermons({ offset: from, limit: to - from + 1 });
          passages.forEach((passage, i) => {
            results.push({
              path: ['passages', 'recent', from + i],
              value: ref(['passages', 'bySlug', passage.slug]),
            });

            results.push(...getPassagePaths(passage));
          });
        })();
      }

      return results;
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
      const results: Array<PathValue> = [];

      for (var slug of slugs) {
        await (async function() {
          const passage = await reading.getSermonBySlug(slug);
          results.push(...getPassagePaths(passage));

          const esvUrl = 'http://www.esvapi.org/v2/rest/passageQuery?key=TEST&passage=' + encodeURIComponent(passage.title.rendered);

          results.push(pathValue(['passages', 'bySlug', passage.slug, 'audio'], () => esvUrl + '&output-format=mp3'));

          if (props.indexOf('content') >= 0) {
            const response = await fetch(esvUrl + '&include-footnotes=false&include-audio-link=false&audio-format=mp3&include-passage-references=false');
            const text = await response.text();
            results.push(pathValue(['passages', 'bySlug', passage.slug, 'content'], () => text));
          }
        })();
      }

      return results;
    },
  },
  {
    route: 'passages.bySlug[{keys}].activity["today","now"]',
    async get([,,slugs]: [any,any,Array<string>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      for (const slug of slugs) {
        // TODO(ewinslow): Get real numbers from Google Analytics?
        results.push(pathValue(['passages', 'bySlug', slug, 'activity', 'today'], () => 86));
        results.push(pathValue(['passages', 'bySlug', slug, 'activity', 'now'], () => 2));
      }

      return results;
    },
  },
]);
