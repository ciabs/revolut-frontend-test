import initialState from './initial.state';
import * as types from '../actions/types';

export default function currencyReducer(state = initialState.currency, action) {
  switch (action.type) {
    case types.SET_FROM_CURRENCY:
      return Object.assign({}, state, {
        fromCurrency: action.fromCurrency
      });
    case types.SET_TO_CURRENCY:
      return Object.assign({}, state, {
        toCurrency: action.toCurrency
      });
    default:
      return state;
  }
}
