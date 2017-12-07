import * as ActionTypes from './types';
import {getRatesFromApi} from '../api/rates.api';
import config from '../config';

export const getRates = (fromCurrency) => dispatch => {
  const toCurrencies = config.supportedCurrencies.filter(currency => currency !== fromCurrency).toString();
  return getRatesFromApi(fromCurrency, toCurrencies)
    .then(rates => dispatch({
        type: ActionTypes.GET_RATES,
        rates
      })
    )
    .catch(error => {
      console.error(error);
    });
};
