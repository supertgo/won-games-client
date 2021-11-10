import { render, screen } from 'utils/test-utils';

import GameInfo from '.';

const props = {
  id: '1',
  title: 'gameInfo',
  description: 'description',
  price: 100.0
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = render(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /GameInfo/i })
    ).toBeInTheDocument();

    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(/\$100.00/)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    render(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument();
  });
});
