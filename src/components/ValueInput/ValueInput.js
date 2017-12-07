import React from 'react';
import PropTypes from 'prop-types';

import {Input} from './ValueInput.styles';

const ValueInput = ({name, value, onChange, disabled, isFromValue}) => (
  <Input
    name={name}
    type="number"
    min="0"
    value={value}
    onChange={onChange}
    disabled={disabled}
    isFromValue={isFromValue}
    isZero={value === 0}
  />
);

ValueInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  isFromValue: PropTypes.bool.isRequired
};

export default ValueInput;
