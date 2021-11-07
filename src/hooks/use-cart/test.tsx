import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { setStorageItem } from 'utils/localStorage';

import { useCart, CartProvider, CartProviderProps } from '.';
import { cartItems, gamesMock } from './mock';

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should return items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    );

    setStorageItem('cartItems', ['1', '2']);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);

    expect(result.current.items).toStrictEqual(cartItems);
    expect(result.current.quantity).toBe(2);
    expect(result.current.total).toBe('$21.00');
  });

  it('should return true of false if the item is already in the car', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    );

    setStorageItem('cartItems', ['1']);

    const { result } = renderHook(() => useCart(), {
      wrapper
    });

    expect(result.current.isInCart('1')).toBe(true);
    expect(result.current.isInCart('2')).toBe(false);
  });

  it('should add item in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    );

    const { result } = renderHook(() => useCart(), {
      wrapper
    });

    //serve para mudar o estado
    act(() => {
      result.current.addToCart('1');
    });

    expect(result.current.quantity).toBe(1);
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify(['1'])
    );
  });

  it('should remove an item in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    );

    const { result } = renderHook(() => useCart(), {
      wrapper
    });

    setStorageItem('cartItems', ['1']);
    //serve para mudar o estado
    act(() => {
      result.current.removeFromCart('1');
    });

    expect(result.current.quantity).toBe(0);
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify([])
    );
  });

  it('should clear the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    );

    const { result } = renderHook(() => useCart(), {
      wrapper
    });

    setStorageItem('cartItems', ['1', '2']);
    //serve para mudar o estado
    act(() => {
      result.current.clearCart();
    });

    expect(result.current.quantity).toBe(0);
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify([])
    );
  });
});
