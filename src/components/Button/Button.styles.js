import styled from 'styled-components';

import {
  EXCHANGE_BG_COLOR_DISABLED,
  EXCHANGE_BG_COLOR_ENABLED, EXCHANGE_BG_COLOR_HOVER, EXCHANGE_COLOR
} from '../../styles/constants';

export const Container = styled.button`
  cursor: pointer;
  background-color: ${EXCHANGE_BG_COLOR_ENABLED};
  color: ${EXCHANGE_COLOR};
  border: none;
  width: 80%;
  padding: 15px;
  border-radius: 25px;
  box-shadow: 0 10px 10px 0 rgba(0,0,0,0.15);
  outline: none;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  :hover {
    background-color: ${EXCHANGE_BG_COLOR_HOVER};
  }
  &:disabled {
    background-color: ${EXCHANGE_BG_COLOR_DISABLED};
    cursor: auto;
  }
`;
