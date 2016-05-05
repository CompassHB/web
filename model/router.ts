import * as Router from "falcor-router";
import {pathValue, ref} from "falcor-json-graph";

export const router = new Router([
  {
    route: 'sermons.recent[{ranges:indexRanges}]',
    get(pathSet) {
      return [
        pathValue(['sermons', 'recent', 0], ref('sermons.byAlias.foo')),
      ];
    },
  },
  {
    route: 'sermons.byAlias[{keys:ids}]["title","content","alias"]',
    get(pathSet) {
      return [
        pathValue(['sermons', 'byId', 'foo', 'title'], 'Sermon about Foo'),
        pathValue(['sermons', 'byId', 'foo', 'content'], 'Sermon content detailing Foo'),
      ];
    },
  },
]);