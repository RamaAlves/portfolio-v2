import { Link } from 'react-router-dom';
import { ButtonNavigateType } from '../../../../interfaces/interfaces';
import styles from './ButtonNavigate.module.scss';
import { useTheme } from '../../../../hooks/useTheme';

export function ButtonNavigate({ content, route }: ButtonNavigateType) {
  const { darkMode } = useTheme();
  return (
    <Link
      className={[
        styles.button,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
      to={route}
    >
      {content}
    </Link>
  );
}
