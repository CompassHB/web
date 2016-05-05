
/**
 * Utility function for converting Falcor array-like structures into actual Arrays.
 *
 * For example:
 *
 *    const data = {1: 'foo', "length": 10};
 *    slice(data, 1, 1); // ['foo']
 */
export function slice<T>(arrayLike: {[index:number]: T, length: number}, offset:number, limit:number): Array<T> {
  if (typeof arrayLike.length === 'undefined') {
      throw new Error("Object is missing 'length' property. Did you forget to request it?");
  }

  let results = [];
  for (let i = offset; i < offset + limit && i < arrayLike.length; i++) {
    results.push(arrayLike[i]);
  }
  return results;
}