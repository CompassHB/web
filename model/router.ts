import * as Router from "falcor-router";
import * as moment from "moment";
import { PathValue, Range, ref } from "falcor-json-graph";
import { Site } from './wordpress';
import { assert, pathValue } from './debug';

const LONG_DATE = 'dddd, MMMM D, YYYY';

const wp = new Site('https://api.compasshb.com/wp-json/wp/v2');

export const router = new Router([
  {
    route: 'people.byId[{integers:ids}]["name","slug"]',
    async get([, , ids, props]: [any, any, Array<number>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      let promise = Promise.resolve(results);
      for (const id of ids) {
        promise = promise.then(() => wp.getUser(id)).then((person) => {
          results.push(...[
            pathValue(['people', 'byId', id, 'name'], () => person.name),
            pathValue(['people', 'byId', id, 'slug'], () => person.slug),
          ]);

          return results;
        });

      }

      return promise;
    },
  },
  {
    route: 'events.featured[{ranges}]',
    async get([, , ranges]: any): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      let promise = Promise.resolve(results);
      for (const {from, to} of ranges) {
        promise = promise.then(() => wp.getFeaturedEvents({ offset: from, limit: to - from + 1 })).then((events) => {
          events.forEach((event, i) => {
            results.push({
              path: ['events', 'featured', from + i],
              value: ref(['events', 'bySlug', event.slug]),
            });
          });

          return results;
        });
      }

      return promise;
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
    async get([, , ranges]: any): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      let promise = Promise.resolve(results);
      for (const {from, to} of ranges) {
        promise = promise.then(() => wp.getUpcomingEvents({ offset: from, limit: to - from + 1 })).then((events) => {
          events.forEach((event, i) => {
            results.push({
              path: ['events', 'upcoming', from + i],
              value: ref(['events', 'bySlug', event.slug]),
            });
          });

          return results;
        });
      }

      return promise;
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

      let promise = Promise.resolve(results);
      for (const slug of slugs) {
        promise = promise.then(() => wp.getEventBySlug(slug)).then((event) => {
          results.push(...[
            pathValue(['events', 'bySlug', slug, 'coverImage'], () => event._embedded['wp:featuredmedia'][0].source_url, ''),
            pathValue(['events', 'bySlug', slug, 'description'], () => event.content.rendered),
            pathValue(['events', 'bySlug', slug, 'endTime'], () => moment(event._EventEndDate).format(LONG_DATE)),
            pathValue(['events', 'bySlug', slug, 'slug'], () => event.slug),
            pathValue(['events', 'bySlug', slug, 'startTime'], () => moment(event._EventStartDate).format(LONG_DATE)),
            pathValue(['events', 'bySlug', slug, 'title'], () => event.title.rendered),
          ]);

          return results;
        });

      }

      return promise;
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

      // Not sure why, but TypeScript keeps using yield here when we try to make this an async function
      // For now, we'll have to use this promise-chaining approach which is still nicer than Observables IMO
      let promise = Promise.resolve(results);
      for (const {from = 0, to} of ranges) {
        promise = promise.then(() => wp.getSermons({ offset: from, limit: to - from + 1 })).then((sermons) => {
          sermons.forEach(({slug}, i) => {
            results.push({
              path: ['sermons', 'recent', from + i],
              value: ref(['sermons', 'bySlug', slug]),
            });
          });

          return results;
        });
      }

      return promise;
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

      let promise = Promise.resolve(results);
      for (const slug of slugs) {
        promise = promise.then(() => wp.getSermonBySlug(slug)).then((sermon) => {

          results.push(...[
            pathValue(['sermons', 'bySlug', slug, 'content'], () => sermon.content.rendered),
            pathValue(['sermons', 'bySlug', slug, 'coverImage'], () => sermon._embedded['wp:featuredmedia'][0].source_url, ''),
            pathValue(['sermons', 'bySlug', slug, 'date'], () => moment(sermon.date).format(LONG_DATE)),
            pathValue(['sermons', 'bySlug', slug, 'slug'], () => sermon.slug),
            pathValue(['sermons', 'bySlug', slug, 'teacher'], () => sermon._embedded.author[0].name),
            pathValue(['sermons', 'bySlug', slug, 'text'], () => sermon.acf.text),
            pathValue(['sermons', 'bySlug', slug, 'title'], () => sermon.title.rendered),
          ]);

          return results;
        });
      }

      return promise;
    },
  },
  {
    route: 'pages.bySlug[{keys:slugs}]["content","slug","title"]',
    async get([, , slugs, props]: [any, any, Array<string>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      let promise = Promise.resolve(results);
      for (const slug of slugs) {
        promise = promise.then(() => wp.getPageBySlug(slug)).then((page) => {
          results.push(...[
            pathValue(['pages', 'bySlug', slug, 'content'], () => page.content.rendered),
            pathValue(['pages', 'bySlug', slug, 'slug'], () => page.slug),
            pathValue(['pages', 'bySlug', slug, 'title'], () => page.title.rendered),
          ]);

          return results;
        });
      }

      return promise;
    },
  },
]);
