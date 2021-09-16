import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  price: 'R$ 235,00'
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('it should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByText(props.price)).not.toHaveStyle({
      textDecoration: 'line-through'
    });
    expect(screen.getByText(props.price)).not.toHaveStyle({
      color: '#8F8F8F'
    });
    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    });
    expect(screen.getByText(props.price)).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('it should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 100,00" />);

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    });
    expect(screen.getByText(props.price)).toHaveStyle({
      color: '#8F8F8F'
    });

    expect(screen.getByText('R$ 100,00')).toHaveStyle({
      backgroundColor: '#3CD3C1'
    });
    expect(screen.getByText('R$ 100,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
    expect(screen.getByText('R$ 100,00')).toHaveStyle({
      color: '#FAFAFA'
    });
  });
});
