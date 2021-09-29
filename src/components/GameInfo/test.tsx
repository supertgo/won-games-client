import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

const props = {
  title: 'gameInfo',
  description: 'description',
  price: '100,00'
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /GameInfo/i })
    ).toBeInTheDocument();

    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(/\$100,00/)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument();
  });
});
