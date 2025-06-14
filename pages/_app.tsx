
// pages/_app.tsx (ejemplo con Pages Router)
import type { AppProps } from 'next/app'; // Importa AppProps desde 'next/app' para tipar las props de tu aplicación
import { ApolloProvider } from '@apollo/client';// Importa ApolloProvider desde @apollo/client
import { initializeApollo } from '@/lib/apolloClient';// Importa tu cliente Apollo
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = initializeApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default App;
