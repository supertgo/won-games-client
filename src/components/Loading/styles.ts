import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    margin: ${theme.spacings.xxsmall};
    animation: fade 1s linear 0s infinite;

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
  `}

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
    border: 3px solid ${theme.colors.primary};
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear 0s infinite;

    ${media.greaterThan('medium')`
      width: ${theme.spacings.xlarge};
      height: ${theme.spacings.xlarge};
    `}
  `}

  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
