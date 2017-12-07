import initialState from './initial.state';
import * as types from '../actions/types';

export default function loadingReducer(state = initialState.loading, action) {
  switch (action.type) {
    case types.SET_RATES_LOADING:
      return Object.assign({}, state, {rates: action.isLoading});
    default:
      return state;
  }
}
