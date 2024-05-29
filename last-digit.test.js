const { lastDigit } = require('./last-digit');

describe('Last digit', () => {
  test('should work', () => {
    expect(lastDigit([])).toBe(1);
    expect(lastDigit([0, 0])).toBe(1);
    expect(lastDigit([0, 0, 0])).toBe(0);
    expect(lastDigit([0, 0, 0, 0])).toBe(1);
    expect(lastDigit([1, 2])).toBe(1);
    expect(lastDigit([2, 2])).toBe(4);
    expect(lastDigit([2, 4])).toBe(6);
    expect(lastDigit([12, 30])).toBe(4);
    expect(lastDigit([3, 4, 5])).toBe(1);
    expect(lastDigit([4, 3, 6])).toBe(4);
    expect(lastDigit([7, 6, 21])).toBe(1);
    expect(lastDigit([12, 30, 21])).toBe(6);
    expect(lastDigit([937640, 767456, 981242])).toBe(0);
    expect(lastDigit([123232, 694022, 140249])).toBe(6);
    expect(lastDigit([499942, 898102, 846073])).toBe(6);
    expect(lastDigit([122578, 402347, 277359])).toBe(2);
    expect(
      lastDigit([
        122578, 402347, 277359, 133951, 728650, 496164, 206181, 759707, 557469,
        639813,
      ])
    ).toBe(2);
    expect(lastDigit([2, 0, 2, 2, 1, 0])).toBe(1);
    expect(lastDigit([2, 0, 2, 2, 1, 0, 1, 1, 0, 0])).toBe(1);
    expect(lastDigit([2, 2, 0, 0, 0])).toBe(2);
    expect(lastDigit([2, 2, 0, 0, 0, 1, 2, 0, 1, 0])).toBe(2);
    expect(lastDigit([0, 1])).toBe(0);
    expect(lastDigit([0, 2])).toBe(0);
    expect(lastDigit([0, 2, 1, 2])).toBe(0);
    expect(lastDigit([0, 1, 1, 1, 2, 2, 2, 2])).toBe(0);
    expect(lastDigit([0, 0, 1, 2, 2, 1, 0])).toBe(1);
    expect(lastDigit([0, 0, 1, 2, 2, 1, 0, 1, 1, 2])).toBe(1);
    expect(lastDigit([2, 0, 2, 0])).toBe(1);
    expect(lastDigit([2, 0, 2, 0, 2, 0, 1, 1, 2, 1])).toBe(1);
    expect(lastDigit([0, 0, 0, 0, 1, 1, 0, 1, 0, 1])).toBe(1);
  });
});
