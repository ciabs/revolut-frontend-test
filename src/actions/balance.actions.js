import * as ActionTypes from './types';
import {showSuccessModal} from './index';
import {setFromValue} from './active.actions';

export const exchange = () => (dispatch, getState) => {
  const state = getState();

  dispatch({
    type: ActionTypes.EXCHANGE,
    active: state.active,
    rates: state.rates
  });

  dispatch(showSuccessModal(true));
  dispatch(setFromValue(''));
};
