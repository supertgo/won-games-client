import { tint } from 'polished';
import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    background: ${tint(0.2, theme.colors.lightGray)};
    padding: ${theme.spacings.small};
    font-weight: ${theme.font.bold};

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.label`
  ${({ theme }) => css`
    display: flex;
    height: 5rem;
    align-items: center;
    border-radius: 0.2rem;
    cursor: pointer;
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.xxsmall};
    color: ${theme.colors.black};

    img {
      padding-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const CardItem = styled(Card)`
  ${({ theme }) => css`
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const CardInfo = styled.div``;

export const Image = styled.img``;

export const AddCard = styled(Card)`
  ${({ theme }) => css`
    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`;
