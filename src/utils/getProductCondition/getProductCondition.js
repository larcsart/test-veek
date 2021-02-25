const getProductCondition = (condition) => {
  const conditions = new Map([
    ['new', 'Novo'],
    ['used', 'Usado'],
    ['not_specified', 'Não especificado'],
  ]);

  return conditions.get(condition);
};

export default getProductCondition;
