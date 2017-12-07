import initialState from './initial.state';
import * as types from '../actions/types';

export default function ratesReducer(state = initialState.rates, action) {
  switch (action.type) {
    case types.GET_RATES:
      return Object.assign({}, state, action.rates);
    default:
      return state;
  }
}
