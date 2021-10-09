import Heading from 'components/Heading';
import GameItem, { GameItemProps } from 'components/GameItem';
import * as S from './styles';
import Empty from 'components/Empty';

export type OrdersListProps = {
  items?: GameItemProps[];
};

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading color="black" size="small" lineBottom lineColor="primary">
      My Orders
    </Heading>

    {items.length ? (
      items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
);

export default OrdersList;
