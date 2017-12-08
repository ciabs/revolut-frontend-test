import React from 'react';
import PropTypes from 'prop-types';

import CurrencySelect from '../CurrencySelect/CurrencySelect';
import ValueInput from '../ValueInput/ValueInput';
import Balance from '../Balance/Balance';
import Button from '../Button/Button';

import {Container} from './ConvertTo.styles';
import {FormWrapper} from '../Main/Main.styles';

const ConvertTo = ({
  balance,
  rates,
  toCurrency,
  toValue,
  handleToCurrencyChange,
  handleToValueChange,
  isExchangeButtonDisabled,
  handleExchange
}) => {
  return (
    <Container>
      <FormWrapper>
        <CurrencySelect
          name="toCurrency"
          value={toCurrency}
          balance={balance}
          isDisabled={!rates.date}
          onChange={handleToCurrencyChange}
        />
        <ValueInput
          name="toValue"
          value={toValue}
          onChange={handleToValueChange}
          disabled={!rates.date}
          isFromValue={false}
        />
      </FormWrapper>
      <Balance
        balance={balance}
        currency={toCurrency}
      />
      <Button
        onClick={handleExchange}
        isDisabled={isExchangeButtonDisabled}
      >
        Exchange
      </Button>
    </Container>
  );
};

ConvertTo.propTypes = {
  balance: PropTypes.object.isRequired,
  rates: PropTypes.object,
  toCurrency: PropTypes.string.isRequired,
  toValue: PropTypes.any.isRequired,
  handleToCurrencyChange: PropTypes.func.isRequired,
  handleToValueChange: PropTypes.func.isRequired,
  handleExchange: PropTypes.func.isRequired,
  isExchangeButtonDisabled: PropTypes.bool.isRequired
};

export default ConvertTo;
