import React from 'react';
import PropTypes from 'prop-types';

import CurrencySelect from '../CurrencySelect/CurrencySelect';
import ValueInput from '../ValueInput/ValueInput';
import Balance from '../Balance/Balance';
import Rates from '../Rates/Rates';

import {Container} from './ConvertFrom.styles';
import {FormWrapper} from '../Main/Main.styles';

const ConvertFrom = ({
  fromCurrency,
  balance,
  rates,
  fromValue,
  toCurrency,
  handleFromCurrencyChange,
  handleFromValueChange
}) => (
  <Container>
    <FormWrapper>
      <CurrencySelect
        name="fromCurrency"
        value={fromCurrency}
        balance={balance}
        isDisabled={!rates.date}
        onChange={handleFromCurrencyChange}
      />
      <ValueInput
        name="fromValue"
        value={fromValue}
        onChange={handleFromValueChange}
        disabled={!rates.date}
        isFromValue={true}
      />
    </FormWrapper>
    <Balance
      balance={balance}
      currency={fromCurrency}
    />
    <Rates
      toCurrency={toCurrency}
      fromCurrency={fromCurrency}
      rates={rates}
    />
  </Container>
  );

ConvertFrom.propTypes = {
  fromCurrency: PropTypes.string.isRequired,
  balance: PropTypes.object.isRequired,
  rates: PropTypes.object,
  fromValue: PropTypes.number.isRequired,
  toCurrency: PropTypes.string.isRequired,
  handleFromCurrencyChange: PropTypes.func.isRequired,
  handleFromValueChange: PropTypes.func.isRequired
};

export default ConvertFrom;
