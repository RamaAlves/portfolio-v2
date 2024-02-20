import { Link } from 'react-router-dom';
import { personalDescription } from '../../info/personalDescription';
import { useLang } from '../../hooks/useLang';
import { ENGLISH } from '../../constants/Languages';
import styles from './Nav.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesLeft,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ContainerSwitches } from '../UI/Switches/ContainerSwitches/ContainerSwitches';
import { useTheme } from '../../hooks/useTheme';
import { useInView } from 'react-intersection-observer';

export function Nav() {
  const { lang } = useLang();
  const { darkMode } = useTheme();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  function handleShow() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if (inView) {
      setOverlayOpen(false);
    }
  }, [inView]);
  return (
    <>
      <nav
        className={[
          styles.navbar,
          styles.nav,
          darkMode ? styles.darkMode : styles.lightMode,
        ].join(' ')}
        ref={ref}
      >
        <Link to="/" unstable_viewTransition className={styles.info}>
          <img
            className={styles.logo}
            src="/images/assets/LogoRamaAlves.png"
            alt="logo"
          />
          <p className={styles.name}>{personalDescription.name}</p>
        </Link>
        <ul className={styles.routes}>
          <Link to="/" unstable_viewTransition>
            {lang == ENGLISH ? <li>Home</li> : <li>Inicio</li>}
          </Link>

          <Link to="/projects" unstable_viewTransition>
            {lang == ENGLISH ? <li>Projects</li> : <li>Proyectos</li>}
          </Link>
        </ul>
        <ContainerSwitches />
      </nav>
      <nav
        className={[
          styles.navbarOverlay,
          darkMode ? styles.darkModeOverlay : styles.lightModeOverlay,
          inView ? styles.overlayOff : styles.overlayOn,
        ].join(' ')}
      >
        <img
          className={[
            styles.logo,
            !overlayOpen ? styles.showButton : styles.hideButton,
          ].join(' ')}
          src="/images/assets/LogoRamaAlves.png"
          alt="logo"
          onClick={() => {
            setOverlayOpen(!overlayOpen);
          }}
        />
        <div
          className={[
            styles.cardOptions,
            overlayOpen ? styles.expandedOptions : styles.contractedOptions,
          ].join(' ')}
        >
          <div className={styles.containerOptions}>
            <ul className={styles.routes}>
              <Link to="/" unstable_viewTransition>
                {lang == ENGLISH ? <li>Home</li> : <li>Inicio</li>}
              </Link>

              <Link to="/projects" unstable_viewTransition>
                {lang == ENGLISH ? <li>Projects</li> : <li>Proyectos</li>}
              </Link>
            </ul>
            {/* 
            <ContainerSwitches /> */}
          </div>
          <div className={styles.contianerButton}>
            <FontAwesomeIcon
              className={styles.button}
              icon={faAnglesLeft}
              beatFade
              onClick={() => {
                setOverlayOpen(!overlayOpen);
              }}
            />
          </div>
        </div>
      </nav>
      <nav
        className={[
          styles.navbarMobile,
          styles.nav,
          darkMode ? styles.darkMode : styles.lightMode,
        ].join(' ')}
      >
        <Link to="/" className={styles.info} unstable_viewTransition>
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
            unstable_viewTransition
            onClick={() => {
              handleShow();
            }}
          >
            {lang == ENGLISH ? <li>Home</li> : <li>Inicio</li>}
          </Link>
          <Link
            to="/projects"
            unstable_viewTransition
            onClick={() => {
              handleShow();
            }}
          >
            {lang == ENGLISH ? <li>Projects</li> : <li>Proyectos</li>}
          </Link>
        </ul>
      </div>
    </>
  );
}
