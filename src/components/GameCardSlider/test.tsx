import { render, screen } from 'utils/test-utils';
import 'match-media-mock';

import GameCardSlider from '.';
import items from './mock';

describe('<GameCardSlider />', () => {
  it('should render with one active item', () => {
    const { container } = render(<GameCardSlider items={items} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows if color passed', () => {
    render(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    });
  });
});
