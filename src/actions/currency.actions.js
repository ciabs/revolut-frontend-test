import * as ActionTypes from './types';

export const setFromCurrency = fromCurrency => ({
  type: ActionTypes.SET_FROM_CURRENCY,
  fromCurrency
});


export const setToCurrency = toCurrency => ({
  type: ActionTypes.SET_TO_CURRENCY,
  toCurrency
});
