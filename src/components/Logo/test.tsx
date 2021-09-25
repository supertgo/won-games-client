import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import Logo from '.';

describe('<Logo />', () => {
  it('it should render logo with a passed id', () => {
    const { container } = renderWithTheme(<Logo id="logo" />);
    expect(container.querySelector('#paint_linear_logo')).toBeInTheDocument();
  });

  it('it should render a white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('it should render a black label when a color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    });
  });

  it('it should render a normal size is default', () => {
    renderWithTheme(<Logo size="normal" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('it should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('it should render a bigger logo without text on mobile if hiddenOnMobile', () => {
    renderWithTheme(<Logo hiddenOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: '(max-width: 768px)' }
    );
  });
});
