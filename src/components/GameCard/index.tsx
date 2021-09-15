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
};

const GameCard = ({ img, title, developer, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
    </S.Info>
    <S.FavButton role="button">
      <FavoriteBorder aria-label="Add to wishlist" />
    </S.FavButton>
    <S.BuyBox>
      <S.Price>{price}</S.Price>
      <Button icon={<AddShoppingCart />} size="small" />
    </S.BuyBox>
  </S.Wrapper>
);

export default GameCard;
