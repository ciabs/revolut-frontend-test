export const convertInputValueToTwoDigitsNumber = string => {
  string = string.replace('-', '');
  let stringMod;
  if (string.includes('.') && string.indexOf('.') > string.length-1) {
    stringMod = parseFloat(string.replace(/[^\d.]/g, ''));
    return convertToTwoDigitsNumber(removeSecondPeriod(stringMod));
  } else {
    stringMod = removeSecondPeriod(string.replace(/[^\d.]/g, ''));
    return stringMod;
  }
};

const removeSecondPeriod = string => {
  let t=0;
  return string.replace(/\./g, match => {
    t++;
    return (t === 2) ? '' : match;
  });
};

export const convertToTwoDigitsNumber = (number) => {
  const decimal = (number.toString().split('.')[1] || []).length;
  return decimal > 2 ? Number(number).toFixed(2) : number;
};
