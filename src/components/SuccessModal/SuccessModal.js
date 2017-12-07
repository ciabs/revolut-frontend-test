import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome  from 'react-fontawesome';

import {rateColor} from '../../styles/constants';
import {Container, Content} from './SuccessModal.styles';
import Button from '../Button/Button';

const SuccessModal = ({handleHideModal}) => {

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
        <span>You exchanged £0.89 -> €1</span>
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


export default SuccessModal;
