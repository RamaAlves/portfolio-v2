import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ENGLISH } from '../../../../constants/Languages';
import { useLang } from '../../../../hooks/useLang';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import styles from './ButtonCv.module.scss';
export function ButtonCv() {
  const [active, setActive] = useState<boolean>(false);
  const { lang } = useLang();
  const { darkMode } = useTheme();
  function handleActivateAnimation() {
    setActive(true);
  }
  function handleDeactivateAnimation() {
    setActive(false);
  }
  return (
    <a
      href="/cv/cv.pdf"
      target="_blank"
      onMouseEnter={handleActivateAnimation}
      onMouseLeave={handleDeactivateAnimation}
      onFocus={handleActivateAnimation}
      className={darkMode ? styles.darkMode : styles.lightMode}
    >
      {active ? (
        <FontAwesomeIcon icon={faFile} bounce />
      ) : (
        <FontAwesomeIcon icon={faFile} beatFade />
      )}
      {lang === ENGLISH ? <p>Download CV</p> : <p>Descargar CV</p>}
    </a>
  );
}
