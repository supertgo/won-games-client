import Link from 'next/link';
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import * as S from './styles';

import Ribbon, { RibbonSizes, RibbonColors } from 'components/Ribbon';
import CartButton from 'components/CartButton';

import formatPrice from 'utils/formatPrice';

export type GameCardProps = {
  id: string;
  slug: string;
  img: string;
  title: string;
  developer: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const GameCard = ({
  id,
  slug,
  img,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!price && !!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        {price ? (
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        ) : (
          <S.Price>FREE</S.Price>
        )}

        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
