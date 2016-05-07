import * as Router from "falcor-router";
import * as moment from "moment";
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

function wpGetMedia(id: number) {
  return wpGetJson(`/media/${id}`);
}

function wpGetSermons(categories: number, {offset = 0, limit = 100}): Observable<{slug: string}> {
  return Observable.fromPromise(wpGetJson(`/sermons?categories=${categories}&offset=${offset}&per_page=${limit}`))
      .concatMap((sermons: Array<{slug: string}>) => Observable.from(sermons));
}

function wpGetUser(id: number): Promise<{id: number, name: string, slug: string}> {
  return wpGetJson(`/users/${id}`);
}


const MAIN_SERVICE = 3; // "Main Service" is category 3 in the wordpress install

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
        return wpGetSermons(MAIN_SERVICE, {
          offset: range.from,
          limit: range.to - range.from + 1,
        }).map(({slug}, i: number) => ({
          // TODO(ewinslow): Cache the sermon bodies to avoid more round trips
          path: ['sermons', 'recent', i],
          value: ref(['sermons', 'byAlias', slug]),
        }));
      }).toArray().toPromise();
    },
  },
  {
    route: 'sermons.recent.length',
    get(pathSets: any) {
      return wpFetch(`/sermons?categories=${MAIN_SERVICE}`, {method: 'head'}).then((response) => {
        return response.headers.get('X-WP-Total');
      }).then((total) => ({
        path: ['sermons', 'recent', 'length'],
        value: total,
      }));
    },
  },
  {
    route: 'sermons.byAlias[{keys:aliases}]["title","content","alias","teacher","text","date","coverImage"]',
    get(pathSets: any) {
      const props = Observable.from(pathSets[3]);
      const aliases = Observable.from(pathSets.aliases);

      return aliases.concatMap((alias: string) => {
        return Observable.fromPromise(wpGetJson(`/sermons?slug=${alias}`))
          .concatMap(([sermon]: Array<any>) => {
            return props.concatMap((prop: string) => {
              const path = ['sermons', 'byAlias', alias, prop];

              switch(prop) {
                case 'alias':
                  return Observable.of({path, value: sermon.slug});
                case 'content':
                  return Observable.of({path, value: sermon.content.rendered});
                case 'coverImage':
                  if (!sermon.featured_media) {
                    return Observable.of();
                  }

                  return Observable.fromPromise(wpGetMedia(sermon.featured_media)
                    .then((media) => ({path, value: media.media_details.sizes.medium.source_url}))
                    .catch((e) => ({path, value: {$type: 'error', value: e.message}})));
                case 'date':
                  return Observable.of({path, value: moment(sermon.date).format('dddd, MMMM D, YYYY')});
                case 'teacher':
                  return Observable.of({path, value: sermon.acf.preacher});
                case 'text':
                  return Observable.of({path, value: sermon.acf.text});
                case 'title':
                  return Observable.of({path, value: sermon.title.rendered});
              }
            });
          });
      }).toArray().toPromise();
    },
  },
]);