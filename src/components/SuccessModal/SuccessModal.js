import React from 'react';
import PropTypes from 'prop-types';

import {getCurrencySymbol} from '../../helpers/currency.helper';

import Button from '../Button/Button';
import check from '../../assets/images/check.svg';
import {Container, Content, Img} from './SuccessModal.styles';

const SuccessModal = ({handleHideModal, lastExchange}) => {

  const renderLastExchangeMessage = `You exchanged 
  ${getCurrencySymbol(lastExchange.fromCurrency)}${Number(lastExchange.fromValue).toFixed(2)} → 
  ${getCurrencySymbol(lastExchange.toCurrency)}${Number(lastExchange.toValue).toFixed(2)}`;

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
