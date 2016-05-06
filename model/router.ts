import * as Router from "falcor-router";
import fetch from 'node-fetch';
import {Observable} from "rxjs";
import {PathValue, ref} from "falcor-json-graph";

function wpFetch(resource: string, options: {method?: 'head'} = undefined) {
  return fetch('http://107.170.41.18/wp-json/wp/v2' + resource);
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

function wpGetUser(id: number): Promise<{id: number, name: string, slug: string}> {
  return wpGetJson(`/users/${id}`);
}

function wpGetPosts(categories: number, {offset = 0, limit = 100}) {
  return Observable.fromPromise(wpGetJson(`/posts?categories=${categories}&offset=${offset}&per_page=${limit}`));
}

export const router = new Router([
  {
    route: 'people.byId[{integers:ids}]["name","alias"]',
    get(pathSets: any) {
      const ids = <Observable<number>>Observable.from(pathSets.ids);
      const props = <Observable<string>>Observable.from(pathSets[3]);

      return ids.concatMap((id) => {
        return Observable.fromPromise(wpGetUser(id)).concatMap((person) => {
          return props.map((prop) => {
            const path = ['people', 'byId', id, prop];

            switch (prop) {
              case 'name':
                return {path, value: person.name};
              case 'alias':
                return {path, value: person.slug};
            }
          });
        });
      }).toArray().toPromise();
    },
  },
  {
    route: 'sermons.recent[{ranges:ranges}]',
    get(pathSets: any) {
      const ranges = <Observable<{from: number, to: number}>>Observable.from(pathSets.ranges);

      return ranges.concatMap((range) => {
        return wpGetPosts(3, { // Category 3 == main service
          offset: range.from,
          limit: range.to - range.from + 1,
        }).concatMap((sermons) => {
          return Observable.from(sermons).map(({slug}, i: number) => ({
            path: ['sermons', 'recent', i],
            value: ref(['sermons', 'byAlias', slug]),
          }));
        });
      }).toArray().toPromise();
    },
  },
  {
    route: 'sermons.recent.length',
    get(pathSets: any) {
      return wpFetch('/posts?categories=3', {method: 'head'}).then((response) => {
        return response.headers.get('X-WP-Total');
      }).then((total) => ({
        path: ['sermons', 'recent', 'length'],
        value: total,
      }));
    },
  },
  {
    route: 'sermons.byAlias[{keys:aliases}]["title","content","alias","teacher"]',
    get(pathSets: any) {
      const props = Observable.from(pathSets[3]);
      const aliases = Observable.from(pathSets.aliases);

      return aliases.concatMap((alias: string) => {
        return Observable.fromPromise(wpGetJson(`/posts?slug=${alias}`))
          .concatMap(([sermon]: any) => {
            return props.map((prop: string) => {
              const path = ['sermons', 'byAlias', alias, prop];

              switch(prop) {
                case 'title':
                  return {path, value: sermon.title.rendered};
                case 'content':
                  return {path, value: sermon.content.rendered};
                case 'alias':
                  return {path, value: sermon.slug};
                case 'teacher':
                  return {path, value: ref(['people', 'byId', sermon.author])};
              }
            });
          });
      }).toArray().toPromise();
    },
  },
]);