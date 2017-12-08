import React from 'react';
import PropTypes from 'prop-types';

import {Container, Content, Img} from './SuccessModal.styles';
import Button from '../Button/Button';
import {getCurrencySymbol} from '../../helpers/currency.helper';
import check from '../../assets/images/check.svg';

const SuccessModal = ({handleHideModal, lastExchange}) => {

  const renderLastExchangeMessage = `You exchanged 
  ${getCurrencySymbol(lastExchange.fromCurrency)}${lastExchange.fromValue} → 
  ${getCurrencySymbol(lastExchange.toCurrency)}${lastExchange.toValue}`;

  return (
    <Container>
      <Content>
        <div>
          <Img src={check} />
        </div>
        <span>
          {renderLastExchangeMessage}
        </span>
      </Content>
      <Button
        onClick={handleHideModal}
        isDisabled={false}
      >
        Done
      </Button>
    </Container>
  );
};

SuccessModal.propTypes = {
  handleHideModal: PropTypes.func.isRequired,
  lastExchange: PropTypes.object.isRequired
};

export default SuccessModal;
