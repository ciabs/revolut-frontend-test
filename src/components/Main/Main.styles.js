import styled from 'styled-components';

import {media} from '../../styles/mediaQuery';
import {fromBackgroundColor, toBackgroundColor} from '../../styles/constants';

export const Container = styled.div`
  width: 375px;
  height: 667px;
  position: relative;
  ${media.small`
    height: 100vh;
  `};
`;

export const FromContainer = styled.div`
  height: 50%;
  box-sizing: border-box;
  padding: 15px;
  background-color: ${fromBackgroundColor};
  border-radius: 10px 10px 0 0;
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
`;

export const ToContainer = styled.div`
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

export const SuccessModalContainer = styled.div`
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


