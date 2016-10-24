import * as jsong from "falcor-json-graph";

export function assert<T>(message: string, truthy: T) {
  if (!truthy) {
    throw new Error(message);
  }

  return truthy;
}

const FIVE_MINUTES_MILLIS = 5 * 60 * 1000;

export async function atom<T>(path: jsong.Path, value: () => T | Promise<T>, defaultValue?: T): Promise<jsong.PathValue> {
  try {
    return { path, value: jsong.atom(await value(), { $expires: -FIVE_MINUTES_MILLIS }) };
  } catch (e) {
    console.error(e);
    return { path, value: jsong.atom(defaultValue, { $expires: -FIVE_MINUTES_MILLIS }) };
  }
}

export async function ref(path: jsong.Path, value: jsong.Path): Promise<jsong.PathValue> {
  return { path, value: jsong.ref(value, { $expires: -FIVE_MINUTES_MILLIS }) };
}
