import 'match-media-mock';
import mockItems from './mock';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Gallery from '.';

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /thumb - gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src);

    expect(
      screen.getByRole('button', { name: /thumb - gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src);
  });

  it('should handle the open  modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const fullMenuElement = screen.getByLabelText('modal');

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery Image 1/i })
    );
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });
  });

  it('should handle the open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery Image 2/i })
    );

    const img = await screen.findByRole('img', { name: /gallery image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });

  it('should handle the close modal  when overlay or button is clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const fullMenuElement = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery Image 1/i })
    );

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should handle the close modal when esc is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    );

    const fullMenuElement = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery Image 1/i })
    );

    fireEvent.keyUp(container, { key: 'Escape' });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });
});
