import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  price: 'R$ 235,00',
  slug: 'population-zero'
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    );

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

    expect(container.firstChild).toMatchSnapshot();
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

  it('it should render a field favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('it should call on fav method when favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onFav).toBeCalled();
  });

  it('it should render a ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/my ribbon/i);
    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
