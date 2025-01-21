const { find } = require('../src/find');

const ARRAY = [1, 3, 4, 6];

describe('find', () => {
  test('should find first even value', () => {
    const expected = 4;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should find first odd value', () => {
    const expected = 1;

    function callback(v) {
      return v % 2 !== 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should find first value at event index', () => {
    const expected = 1;

    function callback(_, i) {
      return i % 2 === 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should find first value at odd index', () => {
    const expected = 3;

    function callback(_, i) {
      return i % 2 !== 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return undefined when value not found', () => {
    const expected = undefined;

    function callback(v) {
      return v === 999;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return undefined when array empty', () => {
    const expected = undefined;

    function callback(v) {
      return v === 999;
    }

    const result = find.call([], callback);

    expect(result).toBe(expected);
  });
});