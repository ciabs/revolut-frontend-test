export const formatString = string =>
  formatNumber(Number(string.replace(/[^\d.]/g, '')));

export const formatNumber = number => Math.round(number * 100) / 100;
