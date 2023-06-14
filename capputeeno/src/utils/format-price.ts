export const FormatValue = (valueInCents: number) => {
  const formatedValue = valueInCents / 100;

  return formatedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};
