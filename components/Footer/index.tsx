import styles from './styles.module.css';
import Link from 'next/link';

import classNames from 'classnames';

import sharedStyles from '../../styles/shared.module.css';

const Navbar = () => {
  return (
    <div className={sharedStyles.Container}>
      <div className={styles.FooterWrapper}>
        <p className={styles.footerCopy}>
          Desenvolvido e mantido por <span className={styles.footerHighlight}>Loterias Boa Sorte</span>
        </p>
        <Link href="https://goo.gl/maps/7xH8bGi9TSZ4ir2Q8" passHref>
          <a target="_blank" rel="noreferrer">
            <span className={styles.footerCopy}>
              Av. Desembargador Moreira, 2262 - Dionísio Torres, Fortaleza - CE,
              60170-002
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
