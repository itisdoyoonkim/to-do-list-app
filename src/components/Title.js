// style
import styles from '../css/Title.module.css';

export default function Title({ title }) {
  return (
    <header>
      <h1 className={styles['title']}>{title}</h1>
    </header>
  );
}
