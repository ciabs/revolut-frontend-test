import * as ActionTypes from './types';

export const exchange = () => (dispatch, getState) => {
  const state = getState();

  return dispatch({
    type: ActionTypes.EXCHANGE,
    active: state.active,
    rates: state.rates
  });
};
