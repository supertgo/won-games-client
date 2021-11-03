import { useQueryGames } from 'graphql/queries/games';
import { useContext, createContext, useState, useEffect } from 'react';
import FormatPrice from 'utils/formatPrice';
import { getStorageItem } from 'utils/localStorage';

const CART_KEY = 'cartItems';

type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export type CartContextData = {
  items: CartItem[] | undefined;
};

export const CartContextDefaultValue = {
  items: []
};

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValue
);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);

    if (data) setCartItems(data);
  }, []);

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems
      }
    }
  });

  return (
    <CartContext.Provider
      value={{
        items: data?.games.map((game) => ({
          id: game.id,
          img: `http://localhost:1337${game.cover?.url}`,
          price: FormatPrice(game.price),
          title: game.name
        }))
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
