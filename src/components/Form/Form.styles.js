import styled from 'styled-components';

import {
  exchangeBackgroundColorEnabled, exchangeBackgroundColorHover, exchangeColor, fromBackgroundColor, rateColor,
  toBackgroundColor
} from '../../styles/constants';

export const Container = styled.div`
  width: 375px;
  height: 667px;
`;

export const FromContainer = styled.div`
  height: 50%;
  padding: 15px;
  background-color: ${fromBackgroundColor};
  border-radius: 5px 5px 0 0;
  position: relative;
`;

export const FromWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ToContainer = styled.div`
  height: 50%;
  padding: 15px;
  background-color: ${toBackgroundColor};
  border-radius: 0 0 5px 5px;
  position: relative;
`;

export const ToWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Rates = styled.div`
  position: absolute;
  bottom: -13px;
  z-index: 2;
  background-color: white;
  border-radius: 13px;
  font-size: 12px;
  color: ${rateColor};
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  border: solid 1px ${toBackgroundColor};
`;

export const ExchangeButton = styled.button`
  background-color: ${exchangeBackgroundColorEnabled};
  color: ${exchangeColor};
  border: none;
  width: 60%;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
  outline: none;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  :hover {
    background-color: ${exchangeBackgroundColorHover};
  }
`;
