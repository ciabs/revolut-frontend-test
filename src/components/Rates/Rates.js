import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome  from 'react-fontawesome';

import {Container} from './Rates.styles';

const Rates = ({rates, fromCurrency, toCurrency}) => {

  return (
    <Container>
      {
        rates.date && rates.rates[toCurrency] ? (
          <div>
            <FontAwesome
              name='line-chart'
              style={{marginRight: '5px'}}
            />
            <span>
              {fromCurrency}1 = {toCurrency}{rates.rates[toCurrency].toFixed(4)}
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
};

Rates.propTypes = {
  rates: PropTypes.object,
  fromCurrency: PropTypes.string,
  toCurrency: PropTypes.string
};

export default Rates;
