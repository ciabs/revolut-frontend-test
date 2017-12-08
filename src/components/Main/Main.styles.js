import styled from 'styled-components';

import {media} from '../../styles/mediaQuery';
import {INITIAL_HEIGHT, INITIAL_WIDTH} from '../../styles/constants';

export const Container = styled.div`
  width: ${INITIAL_WIDTH};
  height: ${INITIAL_HEIGHT};
  position: relative;
  box-shadow: 0 10px 10px 0 rgba(0,0,0,0.15);
  ${media.smallHorizontal`
    width: auto;
  `};
  ${media.smallVertical`
    height: 100vh;
  `};
  ${media.small`
    box-shadow: none;
  `};
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
