import styled from 'styled-components';
import {fromBackgroundColor} from '../../styles/constants';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: ${fromBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  text-align: center;
  font-size: 18px;
`;
