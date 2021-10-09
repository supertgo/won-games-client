import Profile from 'templates/Profile';
import CardsList, { CardsListProps } from 'components/CardsList';

import cardsMock from 'components/PaymentOptions/mock';

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  };
}
