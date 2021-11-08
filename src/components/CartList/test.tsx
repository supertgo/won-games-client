import { render, screen } from 'utils/test-utils';

import mockItems from './mock';

import CartList from '.';

describe('<CartList />', () => {
  it('should render cart list', () => {
    const { container } = render(
      <CartList items={mockItems} total="R$ 300,00" />
    );

    expect(screen.getAllByRole('heading')).toHaveLength(mockItems.length);
    expect(screen.getByText('R$ 300,00')).toHaveStyle({ color: '#F231A5' });
    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button', () => {
    render(<CartList items={mockItems} total="R$ 300,00" hasButton />);

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  });

  it('should render empty if there are no games', () => {
    render(<CartList />);

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
});
