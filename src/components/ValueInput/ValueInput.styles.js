import styled from 'styled-components';
import {fromBackgroundColor, mainColor, toBackgroundColor} from '../../styles/constants';

export const Input = styled.input`
  text-align: right;
  border: none;
  outline: none;
  background-color: ${props => props.isFromValue ? fromBackgroundColor : toBackgroundColor};
  color: ${mainColor};
  font-size: 30px;
  width: 100%;
`;
