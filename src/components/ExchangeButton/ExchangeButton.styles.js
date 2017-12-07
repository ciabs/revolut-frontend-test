import styled from 'styled-components';

import {
  exchangeBackgroundColorDisabled,
  exchangeBackgroundColorEnabled, exchangeBackgroundColorHover, exchangeColor
} from '../../styles/constants';

export const Button = styled.button`
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
