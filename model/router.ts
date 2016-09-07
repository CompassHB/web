import * as Router from "falcor-router";
import * as moment from "moment";
import fetch from 'node-fetch';
import { Observable } from "rxjs";
import { PathValue, ref } from "falcor-json-graph";

function wpFetch(resource: string, options: { method?: 'head' } = {}) {
  return fetch('https://api.compasshb.com/wp-json/wp/v2' + resource, options);
}

function wpGetJson(resource: string) {
  return wpFetch(resource).then((response) => {
    return response.json().then((json) => {
      if (response.status >= 400) {
        throw new Error(json.message);
      }

      return json;
    });
  });
}

function wpGetMedia(id: number) {
  return wpGetJson(`/media/${id}`);
}

function wpGetSermons({offset = 0, limit = 100}): Observable<{ slug: string }> {
  return Observable.fromPromise(wpGetJson(`/posts?categories=1&offset=${offset}&per_page=${limit}`))
    .concatMap((sermons: Array<{ slug: string }>) => Observable.from(sermons));
}

function wpGetUser(id: number): Promise<{ id: number, name: string, slug: string }> {
  return wpGetJson(`/users/${id}`);
}


export const router = new Router([
  {
    route: 'people.byId[{integers:ids}]["name","slug"]',
    get(pathSets: any) {
      const ids = <Observable<number>>Observable.from(pathSets.ids);
      const props = <Observable<string>>Observable.from(pathSets[3]);

      return ids.concatMap((id) => {
        return Observable.fromPromise(wpGetUser(id)).concatMap((person) => {
          return props.map((prop) => {
            const path = ['people', 'byId', id, prop];

            switch (prop) {
              case 'name':
                return { path, value: person.name };
              case 'slug':
                return { path, value: person.slug };
              default:
                throw new Error('Unrecognized property: ' + prop);
            }
          });
        });
      }).toArray().toPromise();
    },
  },
  {
    route: 'events.featured[{ranges:ranges}]',
    get(pathSets: any) {
      // https://api.compasshb.com/wp-json/wp/v2/tribe_events?_embed&filter[tribe_events_cat]=Show on Homepage
      return Promise.resolve([]);
    },
  },
  {
    route: 'events.featured.length',
    get(pathSets: any) {
      return Promise.resolve([]);
    },
  },
  {
    route: 'events.upcoming[{ranges:ranges}]',
    get(pathSets: any) {
      // https://api.compasshb.com/wp-json/wp/v2/tribe_events?_embed
      return Promise.resolve([]);
    },
  },
  {
    route: 'events.upcoming.length',
    get(pathSets: any) {
      return Promise.resolve([]);
    },
  },
  {
    route: 'events.bySlug[{keys:slugs}]["startTime","endTime","title","description","coverImage","slug"]',
    get(pathSets: any) {
      // https://api.compasshb.com/wp-json/wp/v2/tribe_events?_embed&slug={slug}
      return Promise.resolve([]);
    }
  },
  {
    route: 'series.recent[{ranges:ranges}]',
    get(pathSets: any) {
      // Series are "tags" in WP: https://api.compasshb.com/wp-json/wp/v2/tags?embed
      return Promise.resolve([]);
    },
  },
  {
    route: 'series.recent.length',
    get() {
      return Promise.resolve([
        { path: ['series', 'recent', 'length'], value: 0 },
      ]);
    },
  },
  {
    route: 'series.bySlug[{keys:slugs}]["title","description","coverImage","slug"]',
    get(pathSets: any) {
      // Series are "tags" in WP: https://api.compasshb.com/wp-json/wp/v2/tags?embed&slug={slug}
      return Promise.resolve([]);
    },
  },
  {
    route: 'sermons.recent[{ranges:ranges}]',
    get(pathSets: any) {
      const ranges = <Observable<{ from: number, to: number }>>Observable.from(pathSets.ranges);
      const obs = ranges.concatMap((range) => {
        return wpGetSermons({
          offset: range.from,
          limit: range.to - range.from + 1,
        }).map(({slug}, i: number) => {
          return {
            // TODO(ewinslow): Cache the sermon bodies to avoid more round trips
            path: ['sermons', 'recent', i],
            value: ref(['sermons', 'bySlug', slug]),
          };
        });
      });

      const promise = obs.toArray().toPromise();

      return promise;
    },
  },
  {
    route: 'sermons.recent.length',
    get(pathSets: any) {
      return wpFetch(`/posts?categories=1`, { method: 'head' }).then((response) => {
        return response.headers.get('X-WP-Total');
      }).then((total) => ([{
        path: ['sermons', 'recent', 'length'],
        value: total,
      }]));
    },
  },
  {
    route: 'sermons.bySlug[{keys:slugs}]["title","content","slug","teacher","text","date","coverImage"]',
    get(pathSets: any) {
      const props = Observable.from(pathSets[3]);
      const slugs = Observable.from(pathSets.slugs);

      return slugs.concatMap((slug: string) => {
        return Observable.fromPromise(wpGetJson(`/posts?_embed&slug=${slug}`))
          .concatMap(([sermon]: Array<any>) => {
            return props.concatMap((prop: string) => {
              const path = ['sermons', 'bySlug', slug, prop];
              try {
                switch (prop) {
                  case 'slug':
                    return Observable.of({ path, value: sermon.slug });
                  case 'content':
                    return Observable.of({ path, value: sermon.content.rendered });
                  case 'coverImage':
                    return Observable.of({ path, value: sermon._embedded['wp:featuredmedia'][0].source_url });
                  case 'date':
                    return Observable.of({ path, value: moment(sermon.date).format('dddd, MMMM D, YYYY') });
                  case 'teacher':
                    return Observable.of({ path, value: sermon._embedded.author[0].name });
                  case 'text':
                    return Observable.of({ path, value: sermon.acf.text });
                  case 'title':
                    return Observable.of({ path, value: sermon.title.rendered });
                  default:
                    throw new Error('Unrecognized property: ' + prop);
                }
              } catch (e) {
                return Observable.of({ path, value: e.message });
              }
            });
          });
      }).toArray().toPromise();
    },
  },
  {
    route: 'pages.bySlug[{keys:slugs}]["title","content","slug"]',
    get(pathSets: any) {
      const props = Observable.from(pathSets[3]);
      const slugs = Observable.from(pathSets.slugs);

      return slugs.concatMap((slug: string) => {
        return Observable.fromPromise(wpGetJson(`/pages?_embed&slug=${slug}`))
          .concatMap(([page]: Array<any>) => {
            return props.concatMap((prop: string) => {
              const path = ['pages', 'bySlug', slug, prop];
              try {
                switch (prop) {
                  case 'slug':
                    return Observable.of({ path, value: page.slug });
                  case 'content':
                    return Observable.of({ path, value: page.content.rendered });
                  case 'title':
                    return Observable.of({ path, value: page.title.rendered });
                  default:
                    throw new Error('Unrecognized property: ' + prop);
                }
              } catch (e) {
                return Observable.of({ path, value: e.message });
              }
            });
          });
      }).toArray().toPromise();
    },
  },
]);
