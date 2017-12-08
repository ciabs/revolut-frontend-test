import styled from 'styled-components';
import {FROM_BG_COLOR} from '../../styles/constants';
import {media} from '../../styles/mediaQuery';

export const Container = styled.div`
  height: 50%;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${FROM_BG_COLOR};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  ${media.small`
    border-radius: 0;
  `};
`;
