import initialState from './initial.state';
import * as types from '../actions/types';

const exchange =  (state, action) => {
  const {active, rates} = action;
  const echangedValue = active.fromValue * rates.rates[active.toCurrency];

  return Object.assign({}, state, {
    [active.fromCurrency]: state[active.fromCurrency] - active.fromValue,
    [active.toCurrency]: state[active.toCurrency] + echangedValue
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
