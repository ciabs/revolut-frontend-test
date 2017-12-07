import {css} from 'styled-components';

export const media = {
  large: (...args) => css`
    @media (max-width: 992px) {
      ${ css(...args) }
    }
  `,
  medium: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args) }
    }
  `,
  small: (...args) => css`
    @media (max-width: 576px) {
      ${ css(...args) }
    }
  `
};
