import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

import Wishlist from '.';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  }
}));

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  }
}));

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />);

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });

  it('should render component empty when there are no games', () => {
    render(
      <Wishlist
        recommendedGames={props.recommendedGames}
        recommendedHighlight={props.recommendedHighlight}
      />
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Empty')).toHaveLength(2);
  });
});
