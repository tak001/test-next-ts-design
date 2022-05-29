import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './default.module.scss';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const getRandomInt = () => {
    return Math.random();
  };

  return (
    <div className={styles.root}>
      <Head>
        <title>test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div suppressHydrationWarning>Header {getRandomInt()}</div>
      <main className={styles.main}>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default DefaultLayout;
