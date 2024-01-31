import { useTheme } from '../../../hooks/useTheme';
import styles from './BackgroundTech.module.scss';

export function BackgroundTech() {
  const { darkMode } = useTheme();
  return (
    <div
      className={[
        styles.background,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <img src="/images/techs/tech.gif" alt="" />
      <img src="/images/techs/tech-2.gif" alt="" />
      <img src="/images/techs/tech-3.gif" alt="" />
      <img src="/images/techs/tech.gif" alt="" />
      <img src="/images/techs/tech-2.gif" alt="" />
      <img src="/images/techs/tech-3.gif" alt="" />
      <img src="/images/techs/tech.gif" alt="" />
      <img src="/images/techs/tech-2.gif" alt="" />
      <img src="/images/techs/tech-3.gif" alt="" />
      <img src="/images/techs/tech.gif" alt="" />
      <img src="/images/techs/tech-2.gif" alt="" />
      <img src="/images/techs/tech-3.gif" alt="" />
      <img src="/images/techs/tech.gif" alt="" />
      <img src="/images/techs/tech-2.gif" alt="" />
      <img src="/images/techs/tech-3.gif" alt="" />
      <img src="/images/techs/tech.gif" alt="" />
      <img src="/images/techs/tech-2.gif" alt="" />
      <img src="/images/techs/tech-3.gif" alt="" />
    </div>
  );
}