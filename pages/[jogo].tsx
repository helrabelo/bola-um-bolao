import { Aside, Layout } from '../components';

import { useRouter } from 'next/router';

import styles from '../styles/LotteryPage.module.css';

const GamePage = () => {
  const { query } = useRouter();

  return (
    <Layout>
      <div className={styles.aside}>
        <Aside />
      </div>
      <div className={styles.main}>
        <h1>{query.jogo}</h1>
      </div>
    </Layout>
  );
};

export default GamePage;
