import { useTheme } from '../../../hooks/useTheme';
import styles from './Divisor.module.scss';
export function Divisor() {
  const { darkMode } = useTheme();
  return (
    <div
      className={[
        styles.divisor,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <div className={styles.containerClip}>
        <img src="/images/techs/tech.gif" alt="gif-tech-bg" />
        <img src="/images/techs/tech-2.gif" alt="gif-tech-bg" />
        <img src="/images/techs/tech-3.gif" alt="gif-tech-bg" />
        <img src="/images/techs/tech.gif" alt="gif-tech-bg" />
        <img src="/images/techs/tech-2.gif" alt="gif-tech-bg" />
        <img src="/images/techs/tech-3.gif" alt="gif-tech-bg" />
        <img src="/images/techs/tech.gif" alt="gif-tech-bg" />
        <img src="/images/techs/tech-2.gif" alt="gif-tech-bg" />
        <img src="/images/techs/tech-3.gif" alt="gif-tech-bg" />
      </div>
    </div>
  );
}
