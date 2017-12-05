import * as ActionTypes from './types';
import {getRatesFromApi} from '../api/rates.api';
import config from '../config';

export const getRatesSuccess = rates => ({
  type: ActionTypes.GET_RATES,
  rates
});

export const getRates = (fromCurrency) => dispatch => {
  const toCurrencies = config.supportedCurrencies.filter(currency => currency !== fromCurrency).toString();
  return getRatesFromApi(fromCurrency, toCurrencies)
    .then(rates => {
      //dispatch(setGetTrainsInfoError(false));
      return dispatch(getRatesSuccess(rates));
    })
    .catch(error => {
      //dispatch(setGetTrainsInfoError(true));
      console.error(error);
    });
};
