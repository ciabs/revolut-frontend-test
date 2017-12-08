import React from 'react';
import PropTypes from 'prop-types';

import {Input} from './ValueInput.styles';
import {convertToTwoDigitsNumber} from '../../helpers/string.helper';

const ValueInput = ({name, value, onChange, disabled, isFromValue}) => (
  <Input
    name={name}
    placeholder="0"
    value={value === '' ? '' : (isFromValue ? `-${convertToTwoDigitsNumber(value)}` : convertToTwoDigitsNumber(value))}
    onChange={onChange}
    disabled={disabled}
    isFromValue={isFromValue}
  />
);

ValueInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  isFromValue: PropTypes.bool.isRequired
};

export default ValueInput;
