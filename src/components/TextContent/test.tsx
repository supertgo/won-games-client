import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import TextContent from '.';

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`
};

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument();
  });

  it('should render the withou title', () => {
    renderWithTheme(<TextContent content={props.content} />);

    expect(screen.queryByText(props.title)).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument();
  });

  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />);

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement;

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    });

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    });
  });
});
