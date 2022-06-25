import styles from './styles.module.css';

const Results = ({ games }) => {
  return (
    <div className={styles.resultsWrapper}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameWrapper}>
          {Array.isArray(games.numbers) &&
            game.numbers.map((number) => (
              <span key={number} className={styles.number}>
                {number}
              </span>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Results;
