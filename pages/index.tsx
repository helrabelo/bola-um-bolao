import type { NextPage } from 'next';
import classNames from 'classnames';

import styles from '../styles/Home.module.css';

import { Aside, Footer, Navbar } from '../components';

const Home: React.FC<NextPage> = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.aside}>
          <Aside />
        </div>
        <div className={styles.main}>
          <h1>Main</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
