import * as ActionTypes from './types';
import {showSuccessModal} from './index';

export const exchange = () => (dispatch, getState) => {
  const state = getState();

  dispatch({
    type: ActionTypes.EXCHANGE,
    active: state.active,
    rates: state.rates
  });

  dispatch(showSuccessModal(true));
};
