import styled from 'styled-components';

import {media} from '../../styles/mediaQuery';

export const Container = styled.div`
  width: 375px;
  height: 667px;
  position: relative;
  ${media.smallHorizontal`
    width: auto;
  `};
  ${media.smallVertical`
    height: 100vh;
  `};
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
