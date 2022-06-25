import styles from './styles.module.css';
import Link from 'next/link';

import classNames from 'classnames';

import sharedStyles from '../../styles/shared.module.css';

import { games } from '../../util/consts';

const Aside = () => {
  return (
    <div className={sharedStyles.Container}>
      <div className={styles.AsideWrapper}>
        {games.map((game) => (
          <div
            className={classNames(styles.button, {
              [styles.gameMegaSena]: game.name === 'Mega Sena',
              [styles.gameQuina]: game.name === 'Quina',
              [styles.gameDuplaSena]: game.name === 'Dupla Sena',
              [styles.gameLotofacil]: game.name === 'Lotofácil',
              [styles.gameLotoMania]: game.name === 'LotoMania',
            })}
            key={game.id}
          >
            <Link href={game.url}>
              <a>
                <h1>{game.name}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
