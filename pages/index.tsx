import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

const Home: React.FC<NextPage> = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.navbarContainer}>
        <h1>Navbar</h1>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.aside}>
          <h1>Aside</h1>
        </div>
        <div className={styles.main}>
          <h1>Main</h1>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Home;
