import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome  from 'react-fontawesome';

import {rateColor} from '../../styles/constants';
import {Container, Content} from './SuccessModal.styles';
import Button from '../Button/Button';
import {getCurrencySymbol} from '../../helpers/currency.helper';

const SuccessModal = ({handleHideModal, lastExchange}) => {

  const renderLastExchangeMessage = `You exchanged 
  ${getCurrencySymbol(lastExchange.fromCurrency)}${lastExchange.fromValue} → 
  ${getCurrencySymbol(lastExchange.toCurrency)}${lastExchange.toValue}`;

  return (
    <Container>
      <Content>
        <div>
          <FontAwesome
            name='check-circle-o'
            size='5x'
            style={{
              color: rateColor,
              marginBottom: '30px'
            }}
          />
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
