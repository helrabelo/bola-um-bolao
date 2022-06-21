import type { NextPage } from 'next';
import classNames from 'classnames';

import styles from '../styles/Home.module.css';

import { Layout } from '../components';

const Home: React.FC<NextPage> = () => {
  return (
    <Layout>
      <div className={styles.main}>
        <h1>Main</h1>
      </div>
    </Layout>
  );
};

export default Home;
