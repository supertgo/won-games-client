import { render, screen } from 'utils/test-utils';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    render(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /forgot your password/i })
    ).toBeInTheDocument();
  });

  it('should render the text to sign up', () => {
    render(<FormSignIn />);

    expect(screen.getByText('Don’t have an account?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
  });
});
