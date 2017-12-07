import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './Button.styles';

const Button = ({isDisabled, onClick, children}) => {

  return (
    <Container
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
