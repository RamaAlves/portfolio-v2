import { useLang } from '../../hooks/useLang';
import { ENGLISH } from '../../constants/Languages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export function Footer() {
  const { lang } = useLang();
  const { darkMode } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  return (
    <>
      <FontAwesomeIcon
        className={[
          styles.scrollDown,
          !inView ? styles.showScrollDown : styles.hiddenScrollDown,
          darkMode ? styles.darkAnimation : styles.lightAnimation,
        ].join(' ')}
        icon={faAnglesDown}
      />
      <footer
        className={[
          styles.footer,
          darkMode ? styles.darkMode : styles.lightMode,
        ].join(' ')}
        ref={ref}
      >
        <div className={styles.column}>
          {lang == ENGLISH ? (
            <h3 className={styles.contactMe}>My social media</h3>
          ) : (
            <h3 className={styles.contactMe}>Mis redes sociales</h3>
          )}
          <ul className={styles.contacts}>
            <a href="https://www.linkedin.com/in/ramaalves" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
              {/* <p>LinkedIn</p> */}
            </a>
            <a href="https://github.com/RamaAlves" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              {/* <p>GitHub</p> */}
            </a>
            <a href="https://www.instagram.com/ramiro_alves_/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
              {/* <p>Instagram</p> */}
            </a>
            <a href="https://twitter.com/1394Alves" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
              {/* <p>X</p> */}
            </a>
            <a
              href="https://www.facebook.com/ramiro.alves2?locale=es_LA"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
              {/* <p>X</p> */}
            </a>
          </ul>
        </div>
        <div className={styles.column}>
          {lang == ENGLISH ? (
            <h3 className={styles.contactMe}>Contact me!</h3>
          ) : (
            <h3 className={styles.contactMe}>Contactame!</h3>
          )}
          <ul className={styles.contacts}>
            <a href="mailto:ramiroalvesprof@outlook.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email: ramiroalvesprof@outlook.com</p>
            </a>
            <a href="https://t.me/RamiroAlves" target="_blank">
              <FontAwesomeIcon icon={faTelegram} />
              {lang === ENGLISH ? <p>Text me!</p> : <p>Escribeme!</p>}
            </a>
          </ul>
        </div>
        <div className={styles.column}>
          {lang == ENGLISH ? (
            <h3 className={styles.contactMe}>Sections</h3>
          ) : (
            <h3 className={styles.contactMe}>Secciones</h3>
          )}

          <ul className={styles.routes}>
            <Link to="/">
              {lang == ENGLISH ? <li>Home</li> : <li>Inicio</li>}
            </Link>

            <Link to="/projects">
              {lang == ENGLISH ? <li>Projects</li> : <li>Proyectos</li>}
            </Link>
          </ul>
        </div>
        <p className={styles.copy}>©️ Copyright 2024</p>
      </footer>
    </>
  );
}
