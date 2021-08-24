import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { LogoProps } from '.';

const wrapperModiffiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hiddenOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;
      
      svg {height: 4.5rem;}

      .text {
        display: none;
      }
    `}
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hiddenOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModiffiers[size]}
    ${!!hiddenOnMobile && wrapperModiffiers.hiddenOnMobile}
  `}
`;
