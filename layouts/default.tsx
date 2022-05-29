import Head from 'next/head';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { usersState } from '@/store/users/usersAtom';
import styles from './default.module.scss';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const [storeUsers, setStoreUsers] = useRecoilState(usersState);

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
      {storeUsers.length > 0 && <p>{storeUsers[0].name}</p>}

      <main className={styles.main}>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default DefaultLayout;
