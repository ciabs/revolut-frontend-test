import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome  from 'react-fontawesome';

import {Container, LoadingDot} from './Rates.styles';
import {getCurrencySymbol} from '../../helpers/currency.helper';

const Rates = ({rates, fromCurrency, toCurrency, isLoading}) => (
  <Container>
    {
      rates.date && rates.rates[toCurrency] ? (
        <div>
          <FontAwesome
            name='line-chart'
            style={{marginRight: '5px'}}
          />
          <span>
            {
              getCurrencySymbol(fromCurrency)}1 = {getCurrencySymbol(toCurrency)}{rates.rates[toCurrency].toFixed(4)
            }
          </span>
          <LoadingDot isLoading={isLoading}>
            <FontAwesome name='circle' />
          </LoadingDot>
        </div>
      ) : (
        <div>
          <FontAwesome
            name='circle-o-notch'
            spin
          />
        </div>
      )
  }
  </Container>
);


Rates.propTypes = {
  rates: PropTypes.object,
  fromCurrency: PropTypes.string,
  toCurrency: PropTypes.string,
  isLoading: PropTypes.bool
};

export default Rates;
