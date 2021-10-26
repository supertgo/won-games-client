import { screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { renderWithTheme } from 'utils/tests/helpers';
import filterItemsMock from 'components/ExploreSidebar/mock';
import { fetchMoreMock, gamesMock } from './mocks';

import GamesTemplate from '.';
import userEvent from '@testing-library/user-event';
import apolloCache from 'utils/apolloCache';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  query: {},
  asPath: '',
  route: '/',
  events: {
    emit: jest.fn(),
    on: jest.fn(),
    off: jest.fn()
  }
}));

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

describe('<GamesTemplate />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    );

    // it starts without data
    // shows loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // we wait until we have data to get the elements
    // get => tem certeza do elemento
    // query => Não tem o elemento
    // find => processos assincronos
    expect(await screen.findByText(/Price/i)).toBeInTheDocument();
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument();
  });

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', { name: /show more/i }));

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
  });
});
