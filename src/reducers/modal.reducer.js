import initialState from './initial.state';
import * as types from '../actions/types';

export default function modalReducer(state = initialState.modal, action) {
  switch (action.type) {
    case types.SHOW_SUCCESS_MODAL:
      return Object.assign({}, state, {success: action.show});
    default:
      return state;
  }
}
