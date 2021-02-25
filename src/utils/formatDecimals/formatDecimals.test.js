import formatDecimals from './formatDecimals';

describe('formatDecimals', () => {
  test('it should return decimal formatted', () => {
    const decimal = formatDecimals(2);
    expect(decimal).toBe('02');
  });

  test('it should return the same decimal', () => {
    const decimal = formatDecimals(10);
    expect(decimal).toBe(10);
  });
});
