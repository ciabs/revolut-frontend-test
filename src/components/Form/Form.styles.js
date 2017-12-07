import styled from 'styled-components';

import {media} from '../../styles/mediaQuery';
import {
  balanceColor, exchangeBackgroundColorDisabled,
  exchangeBackgroundColorEnabled, exchangeBackgroundColorHover, exchangeColor, fromBackgroundColor,
  toBackgroundColor
} from '../../styles/constants';

export const Container = styled.div`
  width: 375px;
  height: 667px;
  ${media.small`
    height: 100vh;
  `};
`;

export const FromContainer = styled.div`
  height: 50%;
  padding: 15px;
  background-color: ${fromBackgroundColor};
  border-radius: 10px 10px 0 0;
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
`;

export const ValueInput = styled.input`
  text-align: right;
  border: none;
  outline: none;
  background-color: ${props => props.fromValue ? fromBackgroundColor : toBackgroundColor};
`;

export const ToContainer = styled.div`
  height: 50%;
  padding: 15px;
  background-color: ${toBackgroundColor};
  border-radius: 0 0 10px 10px;
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ExchangeButton = styled.button`
  background-color: ${exchangeBackgroundColorEnabled};
  color: ${exchangeColor};
  border: none;
  width: 60%;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.1);
  outline: none;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  :hover {
    background-color: ${exchangeBackgroundColorHover};
  }
  &:disabled {
    background-color: ${exchangeBackgroundColorDisabled};
  }
`;

export const Balance = styled.span`
  font-size: 14px;
  color: ${balanceColor};
`;
