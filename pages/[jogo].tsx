import { Aside, Games, Layout } from '../components';

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
        <Games gameId={query.jogo} />
      </div>
    </Layout>
  );
};

export default GamePage;
