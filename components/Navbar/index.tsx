import styles from './styles.module.css';
import Link from 'next/link';

import classNames from 'classnames';

import sharedStyles from '../../styles/shared.module.css';

const Navbar = () => {
  return (
    <div className={sharedStyles.Container}>
      <div className={styles.NavbarWrapper}>
        <Link href="/">
          <a>
            <h1>Bola um Bolão</h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
