import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import mockItems from './mock';

import CartList from '.';

describe('<CartList />', () => {
  it('should render cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 300,00" />
    );

    expect(screen.getAllByRole('heading')).toHaveLength(mockItems.length);
    expect(screen.getByText('R$ 300,00')).toHaveStyle({ color: '#F231A5' });
    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
