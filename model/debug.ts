import { PathValue, error } from "falcor-json-graph";

export function assert<T>(message: string, truthy: T) {
  if (!truthy) {
    throw new Error(message);
  }

  return truthy;
}

export async function pathValue<T>(path: Array<string | number>, get: () => T, defaultValue?: T): Promise<PathValue> {
  try {
    return { path, value: await get() };
  } catch (e) {
    if (defaultValue == null) {
      return { path, value: error(JSON.stringify({ path, getter: get.toString(), stack: e && e.stack })) };
    } else {
      return { path, value: defaultValue };
    }
  }
}
