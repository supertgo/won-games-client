import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Dropdown from '.';

describe('<Dropdown />', () => {
  it('should open and close the dropdown', () => {
    renderWithTheme(
      <Dropdown title="title">
        <span>Children</span>
      </Dropdown>
    );

    const title = screen.getByText(/title/i);
    const children = screen.getByText(/children/i).parentElement;

    expect(children).toHaveStyle({
      opacity: 0,
      pointerEvents: 'none'
    });

    userEvent.click(title);

    expect(children).toHaveStyle({
      opacity: 1,
      pointerEvents: 'auto'
    });

    userEvent.click(title);

    expect(children).toHaveStyle({
      opacity: 0,
      pointerEvents: 'none'
    });
  });
});
