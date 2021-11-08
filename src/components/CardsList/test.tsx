import { render, screen } from 'utils/test-utils';

import cardsMock from 'components/PaymentOptions/mock';

import CardsList from '.';

describe('<CardsList />', () => {
  it('should render the card list', () => {
    render(<CardsList cards={cardsMock} />);

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    );

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    );

    expect(screen.getByText(/4325/i)).toBeInTheDocument();
    expect(screen.getByText(/4326/i)).toBeInTheDocument();
  });
});
