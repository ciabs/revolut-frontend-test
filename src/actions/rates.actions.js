import * as ActionTypes from './types';
import {getRatesFromApi} from '../api/rates.api';
import config from '../config';
import {setRatesLoading} from './loading.actions';
import {setRatesError} from './errors.actions';

export const getRates = (fromCurrency) => dispatch => {
  const toCurrencies = config.supportedCurrencies.filter(currency => currency !== fromCurrency).toString();
  dispatch(setRatesLoading(true));

  return getRatesFromApi(fromCurrency, toCurrencies)
    .then(rates => {
      dispatch(setRatesLoading(false));
      dispatch(setRatesError(false));

      return dispatch({
        type: ActionTypes.GET_RATES,
        rates
      });
    })
    .catch(error => {
      dispatch(setRatesLoading(false));
      dispatch(setRatesError(error.message));

      console.error(error);
    });
};
