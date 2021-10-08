import styled, { css } from 'styled-components';

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

export const CardInfo = styled.div``;

export const Image = styled.img``;

export const CardItem = styled(Card)`
  ${({ theme }) => css`
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;
