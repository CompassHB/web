import {getPathSets} from './paths';

describe('getPathSets', () => {
  it('handles a single shallow property', () => {
    const actual = getPathSets({
      foo: true,
    });

    expect(actual).toEqual([
      ['foo'],
    ]);
  });

  it('handles a single nested property', () => {
    const actual = getPathSets({
      foo: {
        bar: true,
      },
    });

    expect(actual).toEqual([
      ['foo', 'bar'],
    ]);
  });

  it('handles ranges', () => {
    const actual = getPathSets({
      foo: {
        '0..9': {
          $type: 'range',
          bar: true,
        },
      },
    });

    expect(actual).toEqual([
      ['foo', {from: 0, to: 9}, 'bar'],
    ]);
  });
});