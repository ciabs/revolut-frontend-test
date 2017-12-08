import styled from 'styled-components';
import {fromBackgroundColor} from '../../styles/constants';
import {media} from '../../styles/mediaQuery';

export const Container = styled.div`
  height: 50%;
  box-sizing: border-box;
  padding: 15px;
  background-color: ${fromBackgroundColor};
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  ${media.small`
    border-radius: 0;
  `};
`;
