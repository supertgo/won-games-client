import Heading from 'components/Heading';
import { PaymentCard } from 'components/PaymentOptions';
import * as S from './styles';

export type CardsListProps = {
  cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading color="black" size="small" lineBottom lineColor="primary">
      My cards
    </Heading>

    <S.CardList>
      {cards?.map((card) => (
        <S.CardItem key={card.number}>
          <S.CardInfo>
            <S.Image src={card.img} alt={card.flag} />
            {card.number}
          </S.CardInfo>
        </S.CardItem>
      ))}
    </S.CardList>
  </>
);

export default CardsList;
