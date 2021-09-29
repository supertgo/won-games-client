import Button from 'components/Button';
import Heading from 'components/Heading';

import {
  ShoppingCart as ShoppingCartIcon,
  FavoriteBorder as FavoriteBorderIcon
} from '@styled-icons/material-outlined';
import * as S from './styles';
import Ribbon from 'components/Ribbon';

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineColor="primary" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <Button size="large" icon={<ShoppingCartIcon />}>
        Add to cart
      </Button>
      <Button size="large" minimal icon={<FavoriteBorderIcon />}>
        wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
);

export default GameInfo;
