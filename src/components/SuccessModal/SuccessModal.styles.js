import styled from 'styled-components';
import {fromBackgroundColor} from '../../styles/constants';
import {media} from '../../styles/mediaQuery';

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
  border-radius: 10px;
  ${media.small`
    border-radius: 0;
  `};
`;

export const Content = styled.div`
  text-align: center;
  font-size: 18px;
`;
