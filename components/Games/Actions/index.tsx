import styles from './styles.module.css';

const Actions = ({ children }) => {
  return <div className={styles.actionsWrapper}>{children}</div>;
};

export default Actions;
