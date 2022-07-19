import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo'
import OrderState from '../context/orders/OrderState';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <OrderState>
        <Component {...pageProps} />
      </OrderState>
    </ApolloProvider>
  )
}

export default MyApp
