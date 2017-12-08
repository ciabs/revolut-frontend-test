import initialState from './initial.state';
import * as types from '../actions/types';
import {convertToTwoDigitsNumber} from '../helpers/string.helper';

const exchange =  (state, action) => {
  const {active, rates} = action;
  const echangedValue = active.fromValue * rates.rates[active.toCurrency];

  return Object.assign({}, state, {
    [active.fromCurrency]: convertToTwoDigitsNumber(state[active.fromCurrency] - active.fromValue),
    [active.toCurrency]: convertToTwoDigitsNumber(state[active.toCurrency] + echangedValue),
    lastExchange: {
      fromValue: active.fromValue,
      toValue: echangedValue,
      fromCurrency: active.fromCurrency,
      toCurrency: active.toCurrency
    }
  });
};

export default function balanceReducer(state = initialState.balance, action) {
  switch (action.type) {
    case types.EXCHANGE:
      return exchange(state, action);
    default:
      return state;
  }
}
