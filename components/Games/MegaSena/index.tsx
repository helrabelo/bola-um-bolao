import Results from '../Results';
import Actions from '../Actions';
import styles from './styles.module.css';

const MegaSena = () => {
  return (
    <div>
      <h1>Mega Sena</h1>
      <Actions>
        <button>Sortear</button>
      </Actions>
      <Results games={[{ id: 1, numbers: [1, 2, 3, 4, 5, 6] }]} />
    </div>
  );
};

export default MegaSena;
