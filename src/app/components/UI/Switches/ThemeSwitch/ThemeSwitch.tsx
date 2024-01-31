import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DARK_MODE } from '../../../../constants/localStorageConstants';
import { useTheme } from '../../../../hooks/useTheme';
import styles from './ThemeSwitch.module.scss';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
export function ThemeSwitch() {
  const { darkMode, setDarkMode } = useTheme();
  function handleTheme(state: boolean) {
    setDarkMode(state);
    localStorage.setItem(DARK_MODE, JSON.stringify(state));
  }
  return (
    <div
      className={[styles.container, darkMode ? styles.nox : styles.lumos].join(
        ' ',
      )}
      onClick={() => handleTheme(!darkMode)}
    >
      {darkMode ? (
        <>
          <FontAwesomeIcon
            icon={faLightbulb}
            style={{ color: '#FFD43B' }}
            aria-label="lumos"
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faLightbulb}
            style={{ color: '#4179a4' }}
            aria-label="nox"
          />
        </>
      )}
    </div>
  );
}
