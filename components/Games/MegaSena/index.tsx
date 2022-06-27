import { useState } from 'react';
import Results from '../Results';
import Actions from '../Actions';
import styles from './styles.module.css';

import { gamesRules } from '../../../util/consts';

const MegaSena = () => {
  const [numberOfGames, setNumberOfGames] = useState(1);

  const [numbersPerGame, setNumbersPerGame] = useState(
    gamesRules.megaSena.gameMinNumbers
  );

  const [results, setResults] = useState([]);

  const handleNumberOfGamesChange = (type) => {
    return type === 'increment'
      ? setNumberOfGames(numberOfGames + 1)
      : setNumberOfGames(numberOfGames - 1);
  };

  const handleNumbersPerGameChange = (type) =>
    type === 'increment'
      ? setNumbersPerGame(numbersPerGame + 1)
      : setNumbersPerGame(numbersPerGame - 1);

  const handleGenerateGames = () => {
    // generate games here, the numbers need to be random, uniques and the array of numbers must be sorted
    const games = [];
    for (let i = 0; i < numberOfGames; i++) {
      const numbers = [];
      while (numbers.length < numbersPerGame) {
        const number = Math.floor(
          Math.random() * gamesRules.megaSena.gameMaxValue + 1
        );
        if (!numbers.includes(number)) {
          numbers.push(number);
        }
      }

      numbers.sort((a, b) => a - b);
      games.push({
        id: `${i + 1}`,
        numbers,
      });
    }

    setResults(games);
  };

  return (
    <div className={styles.mainGameWrapper}>
      <Actions>
        <h1>Mega Sena</h1>
        <div className={styles.filterWrappers}>
          
        </div>

        <div className={styles.actionsWrapper}>
          {/* Total de Jogos */}
          <div className={styles.actionItem}>
            <span>Total de Jogos</span>
            <div className={styles.toggleWrapper}>
              <button onClick={() => handleNumberOfGamesChange('decrement')}>
                -
              </button>
              <span>{numberOfGames}</span>
              <button
                disabled={numberOfGames >= 10}
                onClick={() => handleNumberOfGamesChange('increment')}
              >
                +
              </button>
            </div>
          </div>
          {/* Números por Jogo */}
          <div className={styles.actionItem}>
            <span>Números por Jogo</span>
            <div className={styles.toggleWrapper}>
              <button
                disabled={gamesRules.megaSena.gameMinNumbers === numbersPerGame}
                onClick={() => handleNumbersPerGameChange('decrement')}
              >
                -
              </button>
              <span>{numbersPerGame}</span>
              <button
                disabled={numbersPerGame >= gamesRules.megaSena.gameMaxNumbers}
                onClick={() => handleNumbersPerGameChange('increment')}
              >
                +
              </button>
            </div>
          </div>
          {/* Button Wrapper */}
        </div>
        <div className={styles.mainButtonWrapper}>
          <button
            className={styles.mainButton}
            onClick={() => handleGenerateGames()}
          >
            Sortear
          </button>
        </div>
      </Actions>
      <Results games={results} gameType="mega-sena" />
    </div>
  );
};

export default MegaSena;
