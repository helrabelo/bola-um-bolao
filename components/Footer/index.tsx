import styles from './styles.module.css';

import classNames from 'classnames';

import sharedStyles from '../../styles/shared.module.css';

const Navbar = () => {
  return (
    <div className={sharedStyles.Container}>
      <div className={styles.FooterWrapper}>
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Navbar;
