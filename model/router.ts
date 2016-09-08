import * as Router from "falcor-router";
import * as moment from "moment";
import fetch from 'node-fetch';
import { PathValue, Range, error, ref } from "falcor-json-graph";

class CompassHBWordpress {
  constructor(private baseUrl: string) { }

  async getJson(resource: string) {
    const response: Response = await fetch(this.baseUrl + resource);
    const json: any = await response.json();

    if (response.status >= 400) {
      throw new Error(json.message);
    }

    return json;
  }

  getMedia(id: number) {
    return this.getJson(`/media/${id}`);
  }

  getSermons({offset = 0, limit = 100}): Promise<Array<{ slug: string }>> {
    return this.getJson(`/posts?categories=1&offset=${offset}&per_page=${limit}`);
  }

  getUser(id: number): Promise<{ id: number, name: string, slug: string }> {
    return this.getJson(`/users/${id}`);
  }

  head(resource: string) {
    return fetch(this.baseUrl + resource, { method: 'head' });
  }
}

const wp = new CompassHBWordpress('https://api.compasshb.com/wp-json/wp/v2');


export const router = new Router([
  {
    route: 'people.byId[{integers:ids}]["name","slug"]',
    async get([, , ids, props]: [any, any, Array<number>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      for (const id of ids) {
        const person = await wp.getUser(id);

        for (const prop of props) {
          const path = ['people', 'byId', id, prop];

          try {
            switch (prop) {
              case 'name':
                results.push({ path, value: person.name });
                break;
              case 'slug':
                results.push({ path, value: person.slug });
                break;
              default:
                throw new Error('Unrecognized property: ' + prop);
            }
          } catch (e) {
            results.push({ path, value: error(e.message) });
          }
        }
      }

      return results;
    },
  },
  {
    route: 'events.featured[{ranges}]',
    async get([, , ranges]: any): Promise<Array<PathValue>> {
      // https://api.compasshb.com/wp-json/wp/v2/tribe_events?_embed&filter[tribe_events_cat]=Show on Homepage
      return [];
    },
  },
  {
    route: 'events.featured.length',
    async get(pathSets: any): Promise<Array<PathValue>> {
      return [];
    },
  },
  {
    route: 'events.upcoming[{ranges}]',
    async get([, , ranges]: any): Promise<Array<PathValue>> {
      // https://api.compasshb.com/wp-json/wp/v2/tribe_events?_embed
      return [];
    },
  },
  {
    route: 'events.upcoming.length',
    async get(pathSets: any): Promise<Array<PathValue>> {
      return [];
    },
  },
  {
    route: 'events.bySlug[{keys}]["startTime","endTime","title","description","coverImage","slug"]',
    async get([, , slugs, props]: any): Promise<Array<PathValue>> {
      // https://api.compasshb.com/wp-json/wp/v2/tribe_events?_embed&slug={slug}
      return [];
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
    get([, , ranges]: [any, any, Array<Range>]): Promise<Array<PathValue>> {
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
      const response: Response = await wp.head(`/posts?categories=1`);

      return [{
        path: ['sermons', 'recent', 'length'],
        value: response.headers.get('X-WP-Total'),
      }];
    },
  },
  {
    route: 'sermons.bySlug[{keys}]["title","content","slug","teacher","text","date","coverImage"]',
    async get([, , slugs, props]: [any, any, Array<string>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      for (const slug of slugs) {
        const [sermon] = await wp.getJson(`/posts?_embed&slug=${slug}`);

        for (const prop of props) {
          const path = ['sermons', 'bySlug', slug, prop];

          try {
            switch (prop) {
              case 'slug':
                results.push({ path, value: sermon.slug });
                break;
              case 'content':
                results.push({ path, value: sermon.content.rendered });
                break;
              case 'coverImage':
                results.push({ path, value: sermon._embedded['wp:featuredmedia'][0].source_url });
                break;
              case 'date':
                results.push({ path, value: moment(sermon.date).format('dddd, MMMM D, YYYY') });
                break;
              case 'teacher':
                results.push({ path, value: sermon._embedded.author[0].name });
                break;
              case 'text':
                results.push({ path, value: sermon.acf.text });
                break;
              case 'title':
                results.push({ path, value: sermon.title.rendered });
                break;
              default:
                throw new Error('Unrecognized property: ' + prop);
            }
          } catch (e) {
            results.push({ path, value: error(e.message) });
          }
        }
      }

      return results;
    },
  },
  {
    route: 'pages.bySlug[{keys:slugs}]["title","content","slug"]',
    async get([, , slugs, props]: [any, any, Array<string>, Array<string>]): Promise<Array<PathValue>> {
      const results: Array<PathValue> = [];

      for (const slug of slugs) {
        const [page] = await wp.getJson(`/pages?_embed&slug=${slug}`);

        for (const prop of props) {
          const path = ['pages', 'bySlug', slug, prop];
          try {
            switch (prop) {
              case 'slug':
                results.push({ path, value: page.slug });
                break;
              case 'content':
                results.push({ path, value: page.content.rendered });
                break;
              case 'title':
                results.push({ path, value: page.title.rendered });
                break;
              default:
                throw new Error('Unrecognized property: ' + prop);
            }
          } catch (e) {
            results.push({ path, value: error(e.message) });
          }
        }
      }

      return results;
    },
  },
]);
