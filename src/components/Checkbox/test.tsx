import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();

    //label a patir do texto da mesma
    expect(screen.getByText(/label/i)).toHaveAttribute('for', 'check');
  });

  it('should not render a label when it not passed', () => {
    renderWithTheme(<Checkbox />);

    //Query é para ser usado quando eu não quero que tenha o que ta embaixo
    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument();
  });

  it('should render with white label', () => {
    renderWithTheme(<Checkbox label="label" labelFor="check" />);

    expect(screen.getByText(/label/i)).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="label" labelFor="check" labelColor="black" />
    );

    expect(screen.getByText(/label/i)).toHaveStyle({
      color: '#030517'
    });
  });
});
