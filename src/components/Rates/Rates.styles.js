import styled from 'styled-components';
import {fromBackgroundColor, rateColor, toBackgroundColor} from '../../styles/constants';

export const Container = styled.div`
  position: absolute;
  bottom: -18px;
  z-index: 2;
  background-color: ${fromBackgroundColor};
  border-radius: 18px;
  font-size: 14px;
  color: ${rateColor};
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  border: solid 2px ${toBackgroundColor};
`;
