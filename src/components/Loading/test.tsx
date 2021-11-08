import { render, screen } from 'utils/test-utils';

import Loading from '.';

describe('<Loading />', () => {
  it('should render the loading component', () => {
    const { container } = render(<Loading />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
