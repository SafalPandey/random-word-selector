import { getRandomElement } from '../../src/utils/common';

import '../extensions/toBeOneOf';

describe('utils.common', () => {
  it('returns an element that exists in the given array', () => {
    const inputArr = [1, 2];

    expect(getRandomElement(inputArr)).toBeOneOf(inputArr);
  });

  it('returns a char from the string if input is a string', () => {
    const input = 'Test string';

    expect(getRandomElement(input)).toBeOneOf(input);
  });

  it('returns undefined if given array is empty', () => {
    const inputArr = [];
    expect(getRandomElement(inputArr)).toBe(undefined);
  });

  it('throws TypeError if given arg is null', () => {
    const inputArr = null;
    expect(() => getRandomElement(inputArr)).toThrow(TypeError);
  });
});
