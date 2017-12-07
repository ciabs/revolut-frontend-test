import React from 'react';
import PropTypes from 'prop-types';

import {MenuItem, SelectField} from 'material-ui';

const CurrencySelect = ({name, value, onChange, isDisabled, balance}) => (
  <SelectField
    name={name}
    value={value}
    onChange={onChange}
    disabled={isDisabled}
  >
    <MenuItem value="GBP" label="GBP" primaryText={`GBP · ${balance.GBP.toFixed(2)}`} />
    <MenuItem value="EUR" label="EUR" primaryText={`EUR · ${balance.EUR.toFixed(2)}`} />
    <MenuItem value="USD" label="USD" primaryText={`USD · ${balance.USD.toFixed(2)}`} />
  </SelectField>
  );

CurrencySelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  balance: PropTypes.object.isRequired
};

export default CurrencySelect;
