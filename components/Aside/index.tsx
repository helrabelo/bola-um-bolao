import styles from './styles.module.css';
import Link from 'next/link';

import classNames from 'classnames';

import sharedStyles from '../../styles/shared.module.css';

const games = [
  {
    id: 1,
    name: 'Mega Sena',
    className: classNames(styles.button, styles.gameMegaSena),
  },
  {
    id: 2,
    name: 'Quina',
    className: classNames(styles.button, styles.gameQuina),
  },
  {
    id: 3,
    name: 'Lotofácil',
    className: classNames(styles.button, styles.gameLotofacil),
  },
  {
    id: 4,
    name: 'Dupla Sena',
    className: classNames(styles.button, styles.gameDuplaSena),
  },
  {
    id: 5,
    name: 'LotoMania',
    className: classNames(styles.button, styles.gameLotoMania),
  },
];

const Aside = () => {
  return (
    <div className={sharedStyles.Container}>
      <div className={styles.AsideWrapper}>
        {games.map((game) => (
          <div className={game.className} key={game.id}>
            <Link href={`/games/${game.id}`}>
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
