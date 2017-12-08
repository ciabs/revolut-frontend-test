import styled from 'styled-components';
import {toBackgroundColor} from '../../styles/constants';

export const Container = styled.div`
  height: 50%;
  box-sizing: border-box;
  padding: 15px;
  background-color: ${toBackgroundColor};
  border-radius: 0 0 10px 10px;
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
