import formatPrice from './formatPrice';

describe('formatPrice', () => {
  test('it should return price formatted', () => {
    const price = formatPrice(10000);
    expect(price).toBe('10.000');
  });
});
