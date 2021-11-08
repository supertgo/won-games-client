import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from 'hooks/use-cart';

import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { useApollo } from 'utils/apollo';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#06092B" />
            <meta
              name="description"
              content="The Best Game Store in The Whole World"
            />
          </Head>
        </CartProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
