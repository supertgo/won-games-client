import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="supertgo" />);

    expect(screen.getByText(/supertgo/i)).toBeInTheDocument();
  });

  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="supertgo" />);

    userEvent.click(screen.getByText('supertgo'));

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});
