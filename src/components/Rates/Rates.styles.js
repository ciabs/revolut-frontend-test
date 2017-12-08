import styled from 'styled-components';
import {FROM_BG_COLOR, RATE_COLOR, TO_BG_COLOR} from '../../styles/constants';

export const Container = styled.div`
  position: absolute;
  bottom: -18px;
  z-index: 2;
  background-color: ${FROM_BG_COLOR};
  border-radius: 18px;
  font-size: 14px;
  color: ${RATE_COLOR};
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  border: solid 2px ${TO_BG_COLOR};
`;

export const LoadingDot = styled.span`
  color: ${props => props.isLoading ? RATE_COLOR : FROM_BG_COLOR}
`;
