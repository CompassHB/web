import * as Router from "falcor-router";
import * as moment from "moment";
import fetch from 'node-fetch';
import { PathValue, Range, error, ref } from "falcor-json-graph";

const LONG_DATE = 'dddd, MMMM D, YYYY';

function assert<T>(message: string, truthy: T) {
  if (!truthy) {
    throw new Error(message);
  }

  return truthy;
}

function pathValue<T>(path: Array<string | number>, get: () => T, defaultValue?: T): PathValue {
  try {
    return { path, value: get() };
  } catch (e) {
    if (defaultValue == null) {
      return { path, value: error(JSON.stringify({ path, getter: get.toString(), stack: e && e.stack })) };
    } else {
      return { path, value: defaultValue };
    }
  }
}

interface CompassHBWordpressEvent {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  _EventStartDate: string;
  _EventEndDate: string;
  _embedded: {
    ['wp:featuredmedia']: Array<{ source_url: string }>,
  };
}

interface CompassHBWordpressSermon {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded: {
    ['wp:featuredmedia']: Array<{ source_url: string }>,
    author: Array<{ name: string }>,
  };
  acf: {
    text: string,
  };
}

interface CompassHBWordpressPage {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

class CompassHBWordpress {
  constructor(private baseUrl: string) { }

  private async head(resource: string) {
    return fetch(this.baseUrl + resource, { method: 'head' });
  }

  private async getJson(resource: string) {
    const response: Response = await fetch(this.baseUrl + resource);
    const json: any = await response.json();

    if (response.status >= 400) {
      throw new Error(json.message);
    }

    return json;
  }

  async getEventBySlug(slug: string): Promise<CompassHBWordpressEvent> {
    return assert(`No event found with slug ${slug}`, (await this.getJson(`/tribe_events?_embed&slug=${slug}`))[0]);
  }

  async getFeaturedEvents({offset = 0, limit = 100}): Promise<Array<CompassHBWordpressEvent>> {
    return this.getJson(`/tribe_events?_embed&filter[tribe_events_cat]=Show+on+Homepage&offset=${offset}&per_page=${limit}`);
  }

  async getFeaturedEventsCount(): Promise<number> {
    const response = await this.head(`/tribe_events?filter[tribe_events_cat]=Show+on+Homepage`);

    return parseInt(response.headers.get('X-WP-Total'), 10);
  }

  async getUpcomingEvents({offset = 0, limit = 100}): Promise<Array<CompassHBWordpressEvent>> {
    return this.getJson(`/tribe_events?_embed&offset=${offset}&per_page=${limit}`);
  }

  async getUpcomingEventsCount(): Promise<number> {
    const response = await this.head(`/tribe_events`);

    return parseInt(response.headers.get('X-WP-Total'), 10);
  }

  async getMedia(id: number) {
    return this.getJson(`/media/${id}`);
  }

  async getPageBySlug(slug: string) {
    return assert(`No page found with slug ${slug}`, (await this.getJson(`/pages?_embed&slug=${slug}`))[0]);
  }

  async getSermonBySlug(slug: string) {
    return assert(`No sermon found with slug ${slug}`, (await this.getJson(`/posts?_embed&slug=${slug}`))[0]);
  }

  async getSermons({offset = 0, limit = 100}): Promise<Array<{ slug: string }>> {
    return this.getJson(`/posts?categories=1&offset=${offset}&per_page=${limit}`);
  }

  async getSermonsCount() {
    const response = await this.head(`/posts?categories=1`);

    return parseInt(response.headers.get('X-WP-Total'), 10);
  }

  async getUser(id: number): Promise<{ id: number, name: string, slug: string }> {
    return this.getJson(`/users/${id}`);
  }
}

const wp = new CompassHBWordpress('https://api.compasshb.com/wp-json/wp/v2');


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
