import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './Balance.styles';
import {getCurrencySymbol} from '../../helpers/currency.helper';

const Balance = ({currency, balance}) => (
    <Container>
      Balance: {getCurrencySymbol(currency)}{balance[currency].toFixed(2)}
    </Container>
  );

Balance.propTypes = {
  currency: PropTypes.string.isRequired,
  balance: PropTypes.object.isRequired
};

export default Balance;
