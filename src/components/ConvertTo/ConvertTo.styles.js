import styled from 'styled-components';
import {toBackgroundColor} from '../../styles/constants';
import {media} from '../../styles/mediaQuery';

export const Container = styled.div`
  height: 50%;
  box-sizing: border-box;
  padding: 15px;
  background-color: ${toBackgroundColor};
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  ${media.small`
    border-radius: 0;
  `};
`;
