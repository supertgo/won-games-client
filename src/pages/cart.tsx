import itemsMock from 'components/CartList/mock';
import cardsMock from 'components/PaymentOptions/mock';

import Cart, { CartProps } from 'templates/Cart';
import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  });

  return {
    props: {
      items: itemsMock,
      total: '$100.00',
      cards: cardsMock,
      recommendedTitle: recommended?.section?.title,
      recommendedGames: gamesMapper(recommended?.section?.games),
      recommendedHighlight: highlightMapper(recommended?.section?.highlight)
    }
  };
}
