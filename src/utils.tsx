export const renderNumber = (number: null | string) => {
  if (number === null) {
    return '--';
  }
  for (let i = 0; i < number.length; i++) {}
  return number;
};

export const getPriceOdds = (
  price: string | null,
  prevPrice: string | null
) => {
  if (!price || !prevPrice) {
    return {
      isPositive: false,
      priceOdds: null,
    };
  }
  const percent = (+price - +prevPrice) * (100 / Math.min(+prevPrice, +price));
  const priceInfo = {
    isPositive: percent > 0 ? true : false,
    priceOdds: percent.toFixed(1),
  };
  return priceInfo;
};
