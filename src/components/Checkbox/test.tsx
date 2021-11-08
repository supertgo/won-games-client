import { screen, waitFor } from '@testing-library/react';
import { render } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = render(<Checkbox label="label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();

    //label a patir do texto da mesma
    expect(screen.getByText(/label/i)).toHaveAttribute('for', 'check');

    expect(container).toMatchSnapshot();
  });

  it('should not render a label when it not passed', () => {
    render(<Checkbox />);

    //Query é para ser usado quando eu não quero que tenha o que ta embaixo
    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument();
  });

  it('should render with white label', () => {
    render(<Checkbox label="label" labelFor="check" />);

    expect(screen.getByText(/label/i)).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render with black label', () => {
    render(<Checkbox label="label" labelFor="check" labelColor="black" />);

    expect(screen.getByText(/label/i)).toHaveStyle({
      color: '#030517'
    });
  });

  it('should dispatch onCheck when label status change', async () => {
    const onCheck = jest.fn();
    render(<Checkbox label="label" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when label status change', async () => {
    const onCheck = jest.fn();

    render(<Checkbox label="label" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', () => {
    render(<Checkbox label="label" labelFor="label" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('checkbox')).toHaveFocus();
  });
});
