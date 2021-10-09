import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-gap: calc(${theme.grid.gutter} * 2);
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: 32rem 1fr;
      grid-gap: ${theme.spacings.large};
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  `}
`;
