import styled from 'styled-components';

import {media} from '../../styles/mediaQuery';

export const Container = styled.div`
  width: 375px;
  height: 667px;
  position: relative;
  ${media.small`
    height: 100vh;
  `};
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
