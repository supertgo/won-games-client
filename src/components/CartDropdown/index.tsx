import CartIcon from 'components/CartIcon';
import Dropdown from 'components/Dropdown';
import CartList from 'components/CartList';
import { GameItemProps } from 'components/GameItem';
import * as S from './styles';

export type CartDropdownProps = {
  items?: GameItemProps[];
  total?: string;
};

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
);

export default CartDropdown;
