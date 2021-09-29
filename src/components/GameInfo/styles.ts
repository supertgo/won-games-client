import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from 'components/Ribbon/styles';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${RibbonStyles.Wrapper} {
      rigth: -1rem;
      font-weight: ${theme.font.bold};

      &:before {
        border-rigth-width: 1rem;
      }
    }

    ${media.greaterThan('small')`
      padding: ${theme.spacings.small};
    `}

    ${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};

        &:before {
          border: none;
        }
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`;
