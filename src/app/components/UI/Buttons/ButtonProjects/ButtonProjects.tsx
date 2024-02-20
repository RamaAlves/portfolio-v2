import { Link } from 'react-router-dom';
import { ENGLISH } from '../../../../constants/Languages';
import { useLang } from '../../../../hooks/useLang';
import styles from './ButtonProjects.module.scss';
export function ButtonProjects() {
  const { lang } = useLang();
  return (
    <Link
      to="/projects"
      preventScrollReset={false}
      unstable_viewTransition
      className={styles.button}
    >
      <>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
        <span className={styles.animateBlock}></span>
      </>
      <p className={styles.text}>
        {lang == ENGLISH ? 'My projects' : 'Mis proyectos'}
      </p>
    </Link>
  );
}
