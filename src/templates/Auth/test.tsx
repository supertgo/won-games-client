import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('should render logos, title, subtitle children', () => {
    renderWithTheme(
      <Auth title="Title">
        <input type="text" />
      </Auth>
    );

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /won is the best/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /all your favorite games/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
