import { CartContextDefaultValue } from 'hooks/use-cart';
import { render, screen } from 'utils/test-utils';

import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should render with badge', () => {
    render(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValue, quantity: 12 }
    });

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(/12/i)).toBeInTheDocument();
  });
});
