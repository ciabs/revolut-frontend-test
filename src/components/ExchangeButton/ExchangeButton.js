import React from 'react';
import PropTypes from 'prop-types';

import {Button} from './ExchangeButton.styles';

const ExchangeButton = ({balance, fromCurrency, fromValue, handleExchange}) => {

  return (
    <Button
      disabled={balance[fromCurrency] < fromValue || balance[fromCurrency] === 0}
      onClick={handleExchange}
    >
      Exchange
    </Button>
  );
};

ExchangeButton.propTypes = {
  balance: PropTypes.object.isRequired,
  fromCurrency: PropTypes.string.isRequired,
  fromValue: PropTypes.number.isRequired,
  handleExchange: PropTypes.func.isRequired
};

export default ExchangeButton;
