import initialState from './initial.state';
import * as types from '../actions/types';

const setFromValue = (state, action) => {
  const {toCurrency} = state;
  const {fromValue, rates} = action;
  const toValue = fromValue * rates.rates[toCurrency];

  return Object.assign({}, state, {
    fromValue: action.fromValue,
    toValue
  });
};

const setToValue = (state, action) => {
  const {toValue, rates} = action;
  const {toCurrency} = state;
  const fromValue = toValue / rates.rates[toCurrency];


  return Object.assign({}, state, {
    toValue: action.toValue,
    fromValue
  });
};

const setFromCurrency = (state, action) => {
  const {fromValue} = state;
  const {fromCurrency, rates} = action;
  const toCurrency = state.toCurrency === fromCurrency ?
    state.fromCurrency :
    state.toCurrency;

  const toValue = fromValue * rates.rates[toCurrency];

  return Object.assign({}, state, {
    fromCurrency: action.fromCurrency,
    toValue,
    toCurrency
  });
};

const setToCurrency = (state, action) => {
  const {fromValue} = state;
  const {toCurrency, fromCurrency, rates} = action;
  const toValue = fromValue * rates.rates[toCurrency];

  return Object.assign({}, state, {
    toCurrency: action.toCurrency,
    toValue,
    fromCurrency
  });
};

export default function activeReducer(state = initialState.active, action) {
  switch (action.type) {
    case types.SET_FROM_VALUE:
      return setFromValue(state, action);
    case types.SET_TO_VALUE:
      return setToValue(state, action);
    case types.SET_FROM_CURRENCY:
      return setFromCurrency(state, action);
    case types.SET_TO_CURRENCY:
      return setToCurrency(state, action);
    default:
      return state;
  }
}
