import * as ActionTypes from './types';
import {getRates} from './rates.actions';

export const setFromValue = fromValue => (dispatch, getState) => {
  const rates = getState().rates;

  return dispatch({
    type: ActionTypes.SET_FROM_VALUE,
    fromValue,
    rates
  });
};

export const setToValue = toValue => (dispatch, getState) => {
  const rates = getState().rates;

  return dispatch({
    type: ActionTypes.SET_TO_VALUE,
    toValue,
    rates
  });
};

export const setFromCurrency = fromCurrency => (dispatch, getState) => {
  return dispatch(getRates(fromCurrency))
    .then(() => {
      const rates = getState().rates;

      return dispatch({
        type: ActionTypes.SET_FROM_CURRENCY,
        fromCurrency,
        rates
      });
    });
};

export const setToCurrency = toCurrency => (dispatch, getState) => {
  const active = getState().active;
  const fromCurrency = active.fromCurrency === toCurrency ?
    active.toCurrency :
    active.fromCurrency;

  return dispatch(getRates(fromCurrency))
    .then(() => {
      const rates = getState().rates;

      return dispatch({
        type: ActionTypes.SET_TO_CURRENCY,
        fromCurrency,
        toCurrency,
        rates
      });
    });
};
