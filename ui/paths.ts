import {PathSet} from "falcor-json-graph";

function getSegment(key: string, val: { $type: string }): string | { from: number, to: number } {
  if (val.$type === 'range') {
    delete val.$type;
    const [from, to] = key.split('..');
    return { from: parseInt(from, 10), to: parseInt(to, 10) };
  }

  return key;
}

export function getPathSets(shape: Object, basePath: PathSet = []): Array<PathSet> {
  return Object.keys(shape)
    .filter((key) => !!shape[key])
    .map((key): Array<PathSet> => {
      const val = shape[key];
      if (typeof val != 'object') {
        return [[...basePath, key]];
      }

      return getPathSets(val, [...basePath, getSegment(key, val)]);
    }).reduce((curr, next) => [...curr, ...next], []);
}
