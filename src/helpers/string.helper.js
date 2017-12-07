export const convertInputValueToTwoDigitsNumber = string =>
  convertToTwoDigitsNumber(Number(string.replace(/[^\d.]/g, '')));

export const convertToTwoDigitsNumber = number => Math.round(number * 100) / 100;
