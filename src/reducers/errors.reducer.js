import initialState from './initial.state';
import * as types from '../actions/types';

export default function errorsReducer(state = initialState.errors, action) {
  switch (action.type) {
    case types.SET_RATES_ERROR:
      return Object.assign({}, state, {rates: action.error});
    default:
      return state;
  }
}
