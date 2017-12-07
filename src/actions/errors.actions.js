import * as ActionTypes from './types';

export const setRatesError = error => ({
  type: ActionTypes.SET_RATES_ERROR,
  error
});
