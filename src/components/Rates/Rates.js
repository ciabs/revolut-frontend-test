import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome  from 'react-fontawesome';

import {Container} from './Rates.styles';
import {getCurrencySymbol} from '../../helpers/currency.helper';

const Rates = ({rates, fromCurrency, toCurrency}) => (
  <Container>
    {
      rates.date && rates.rates[toCurrency] ? (
        <div>
          <FontAwesome
            name='line-chart'
            style={{marginRight: '5px'}}
          />
          <span>
            {getCurrencySymbol(fromCurrency)}1 = {getCurrencySymbol(toCurrency)}{rates.rates[toCurrency].toFixed(4)}
          </span>
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
  toCurrency: PropTypes.string
};

export default Rates;
