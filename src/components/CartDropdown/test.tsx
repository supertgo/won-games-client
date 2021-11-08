import { render, screen } from 'utils/test-utils';
import items from 'components/CartList/mock';

import CartDropdown from '.';

describe('<CartDropdown />', () => {
  it('should render the heading cart icon and its badge', () => {
    render(<CartDropdown items={items} total="R$ 150,00" />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
  });

  it('should render dropdown content with cart items and total', () => {
    render(<CartDropdown items={items} total="R$ 150,00" />);

    expect(screen.getByText('R$ 150,00')).toBeInTheDocument();
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
  });
});
