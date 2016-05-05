import {slice} from './slice';

describe('slice', () => {
  it('Handles overflow', () => {
    expect(slice({
      0: '0',
      1: '1',
      length: 2,
    }, 0, 50)).toEqual(['0', '1']);
  });
});