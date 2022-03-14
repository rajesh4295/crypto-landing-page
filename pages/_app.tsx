import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { AppContextProvider } from '@utility';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component>{pageProps}</Component>
      {/* <Component {...pageProps} /> */}
    </AppContextProvider>
  );
}

export default MyApp;
