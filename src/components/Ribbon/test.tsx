import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = renderWithTheme(<Ribbon>Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with primary color', () => {
    renderWithTheme(<Ribbon>Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    });
  });

  it('should render the secondary color when passed', () => {
    renderWithTheme(<Ribbon color="secondary">Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    });
  });

  it('should render the default size', () => {
    renderWithTheme(<Ribbon>Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    });
  });

  it('should render the small size when passed', () => {
    renderWithTheme(<Ribbon size="small">Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
