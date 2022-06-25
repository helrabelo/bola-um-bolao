import styles from './styles.module.css';
import Link from 'next/link';

import classNames from 'classnames';

import sharedStyles from '../../styles/shared.module.css';

import { games } from '../../util/consts';

const Navbar = () => {
  return (
    <div className={sharedStyles.Container}>
      <div className={styles.NavbarWrapper}>
        <div className={styles.LogoWrapper}>
          <Link href="/">
            <a>
              <h1>Bola um Bolão</h1>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          {games.map((game) => (
            <div className={styles.navItem} key={game.id}>
              <Link href={game.url}>
                <a>
                  <span>{game.name}</span>
                </a>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
