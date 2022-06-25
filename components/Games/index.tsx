import styles from './styles.module.css';
import MegaSena from './MegaSena';

const Games = ({ gameId }) => {
  if (gameId === 'mega-sena') {
    return <MegaSena />;
  }
  return (
    <div>
      Game Id {gameId} of type {typeof gameId} not found
    </div>
  );
};

export default Games;
