import Button from 'components/Button';
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined';
import * as S from './styles';

export type GameCardProps = {
  img: string;
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
};

const GameCard = ({
  img,
  title,
  developer,
  price,
  promotionalPrice
}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button">
        <FavoriteBorder aria-label="Add to wishlist" />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
