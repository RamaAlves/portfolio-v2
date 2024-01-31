import { Link } from 'react-router-dom';
import { personalDescription } from '../../info/personalDescription';
import { useLang } from '../../hooks/useLang';
import { ENGLISH } from '../../constants/Languages';
import styles from './Nav.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ContainerSwitches } from '../UI/Switches/ContainerSwitches/ContainerSwitches';
import { useTheme } from '../../hooks/useTheme';
export function Nav() {
  const { lang } = useLang();
  const { darkMode } = useTheme();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  function handleShow() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav
        className={[
          styles.navbar,
          styles.nav,
          darkMode ? styles.darkMode : styles.lightMode,
        ].join(' ')}
      >
        <Link to="/" className={styles.info}>
          <img
            className={styles.logo}
            src="/images/assets/LogoRamaAlves.png"
            alt="logo"
          />
          <p className={styles.name}>{personalDescription.name}</p>
        </Link>
        <ul className={styles.routes}>
          <Link to="/">
            {lang == ENGLISH ? <li>Home</li> : <li>Inicio</li>}
          </Link>
          <Link to="/proyects">
            {lang == ENGLISH ? <li>Proyects</li> : <li>Proyectos</li>}
          </Link>
          <Link to="/about-me">
            {lang == ENGLISH ? <li>About me</li> : <li>Sobre mi</li>}
          </Link>
        </ul>
        <ContainerSwitches />
      </nav>
      <nav
        className={[
          styles.navbarMobile,
          styles.nav,
          darkMode ? styles.darkMode : styles.lightMode,
        ].join(' ')}
      >
        <Link to="/" className={styles.info}>
          <img
            className={styles.logo}
            src="/images/assets/LogoRamaAlves.png"
            alt="logo"
          />
          <p className={styles.name}>{personalDescription.name}</p>
        </Link>
        <button
          className={styles.button}
          onClick={() => {
            handleShow();
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div
        className={[
          styles.menu,
          showMenu ? styles.show : styles.hide,
          darkMode ? styles.darkMode : styles.lightMode,
        ].join(' ')}
      >
        <button
          className={styles.button}
          onClick={() => {
            handleShow();
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ContainerSwitches />
        <ul className={styles.routes}>
          <Link
            to="/"
            onClick={() => {
              handleShow();
            }}
          >
            {lang == ENGLISH ? <li>Home</li> : <li>Inicio</li>}
          </Link>
          <Link
            to="/proyects"
            onClick={() => {
              handleShow();
            }}
          >
            {lang == ENGLISH ? <li>Proyects</li> : <li>Proyectos</li>}
          </Link>
          <Link
            to="/about-me"
            onClick={() => {
              handleShow();
            }}
          >
            {lang == ENGLISH ? <li>About me</li> : <li>Sobre mi</li>}
          </Link>
        </ul>
      </div>
    </>
  );
}
