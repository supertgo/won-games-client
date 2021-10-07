import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main``;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.large};
    grid-template-columns: 1fr;
    margin: ${theme.spacings.large} 0;

    ${media.greaterThan('medium')`
      grid-template-columns: 2fr 1fr;
    `}
  `}
`;
