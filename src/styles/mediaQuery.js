import {css} from 'styled-components';

export const media = {
  smallHorizontal: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `,
  smallVertical: (...args) => css`
    @media (max-height: 750px) {
      ${ css(...args) }
    }
  `,
  small: (...args) => css`
    @media (max-width: 420px) and (max-height: 750px) {
      ${ css(...args) }
    }
  `
};
