import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';
import CartButton from 'components/CartButton';

import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-outlined';

import formatPrice from 'utils/formatPrice';

import * as S from './styles';

export type GameInfoProps = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineColor="primary" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <Button size="large" minimal icon={<FavoriteBorderIcon />}>
        wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
);

export default GameInfo;
