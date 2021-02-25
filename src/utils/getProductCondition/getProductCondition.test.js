import getProductCondition from './getProductCondition';

describe('formatDecimals', () => {
  test('it should return new condition', () => {
    const condition = getProductCondition('new');
    expect(condition).toBe('Novo');
  });

  test('it should return used condition', () => {
    const condition = getProductCondition('used');
    expect(condition).toBe('Usado');
  });

  test('it should return not_specified condition', () => {
    const condition = getProductCondition('not_specified');
    expect(condition).toBe('Não especificado');
  });
});
