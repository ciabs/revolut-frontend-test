import styled from 'styled-components';
import {FROM_BG_COLOR, MAIN_COLOR, TO_BG_COLOR, ZERO_VALUE_COLOR} from '../../styles/constants';

export const Input = styled.input`
  text-align: right;
  border: none;
  outline: none;
  background-color: ${props => props.isFromValue ? FROM_BG_COLOR : TO_BG_COLOR};
  color: ${props => props.isZero ? ZERO_VALUE_COLOR : MAIN_COLOR};
  font-size: 30px;
  width: 100%;
`;
