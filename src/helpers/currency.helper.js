export const getCurrencySymbol = currencyCode => {
  switch (currencyCode) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€';
    case 'GBP':
    default:
      return '£';
  }
};
