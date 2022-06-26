import styles from './styles.module.css';
import classnames from 'classnames';

const Results = ({ games, gameType }) => {
  return (
    <div className={styles.resultsWrapper}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameWrapper}>
          <h3 className={styles.gameId}>#{game.id}</h3>
          <div className={styles.gameNumbers}>
            {game.numbers.map((number) => (
              <span key={number} className={classnames(styles.number, {
                [styles.megaSena] : gameType === 'mega-sena',
                [styles.quina] : gameType === 'quina',
                [styles.duplaSena] : gameType === 'dupla-sena',
                [styles.lotomania] : gameType === 'lotomania',
                [styles.lotofacil] : gameType === 'lotofacil',
              })}>
                {number}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
