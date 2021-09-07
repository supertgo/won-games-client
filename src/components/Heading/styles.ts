import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps, LineColors } from '.';

const wrapperModiffiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size, lineColor, lineLeft, lineBottom }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModiffiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModiffiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModiffiers[size](theme)}
  `}
`;
