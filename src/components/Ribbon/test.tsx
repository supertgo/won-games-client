import { render, screen } from 'utils/test-utils';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = render(<Ribbon>Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with primary color', () => {
    render(<Ribbon>Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    });
  });

  it('should render the secondary color when passed', () => {
    render(<Ribbon color="secondary">Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    });
  });

  it('should render the default size', () => {
    render(<Ribbon>Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    });
  });

  it('should render the small size when passed', () => {
    render(<Ribbon size="small">Best Saller</Ribbon>);

    expect(screen.getByText(/best saller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
