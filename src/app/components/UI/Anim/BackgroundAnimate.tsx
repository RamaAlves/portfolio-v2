import { useTheme } from '../../../hooks/useTheme';
import styles from './BackgroundAnimate.module.scss';
export function BackgroundAnimate() {
  const { darkMode } = useTheme();
  return (
    <ul
      className={[
        styles.bg,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}
