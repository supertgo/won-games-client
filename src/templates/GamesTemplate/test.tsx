import { screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { renderWithTheme } from 'utils/tests/helpers';

import { fetchMoreMock, gamesMock } from './mocks';
import filterItemsMock from 'components/ExploreSidebar/mock';

import Games from '.';
import userEvent from '@testing-library/user-event';
import apolloCache from 'utils/apolloCache';

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
  }
}));

describe('<Games />', () => {
  it('should render loading when starting template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );
    //starts without data
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    //waiting to data

    expect(
      await screen.findByTestId('Mock ExploreSidebar')
    ).toBeInTheDocument();

    expect(await screen.findByText(/Stardew Valley/i)).toBeInTheDocument();

    expect(
      await screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument();
  });

  it('should render more games when button show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(await screen.findByText(/Stardew Valley/i)).toBeInTheDocument();

    userEvent.click(await screen.getByRole('button', { name: /show more/i }));

    expect(await screen.findByText(/fetch more game/i)).toBeInTheDocument();
  });
});
