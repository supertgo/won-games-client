import { render, screen } from 'utils/test-utils';

import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should render with badge', () => {
    render(<CartIcon quantity={12} />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(/12/i)).toBeInTheDocument();
  });

  it('should render with badge only with positive numbers', () => {
    render(<CartIcon quantity={-12} />);

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/-12/i)).not.toBeInTheDocument();
  });
});
