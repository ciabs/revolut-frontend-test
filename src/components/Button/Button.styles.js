import styled from 'styled-components';

import {
  exchangeBackgroundColorDisabled,
  exchangeBackgroundColorEnabled, exchangeBackgroundColorHover, exchangeColor
} from '../../styles/constants';

export const Container = styled.button`
  cursor: pointer;
  background-color: ${exchangeBackgroundColorEnabled};
  color: ${exchangeColor};
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
    background-color: ${exchangeBackgroundColorHover};
  }
  &:disabled {
    background-color: ${exchangeBackgroundColorDisabled};
  }
`;
