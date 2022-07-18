import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import DefaultLayout from '@/layouts/default';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </RecoilRoot>
  );
}

export default MyApp;
