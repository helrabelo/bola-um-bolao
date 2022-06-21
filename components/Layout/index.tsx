import styles from './styles.module.css';

import { Footer, Navbar } from '../';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.mainContainer}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
