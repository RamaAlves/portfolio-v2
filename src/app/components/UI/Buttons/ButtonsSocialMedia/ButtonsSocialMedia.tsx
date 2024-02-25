import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ButtonsSocialMedia.module.scss';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../../../../hooks/useTheme';

export function ButtonsSocialMedia() {
  const { darkMode } = useTheme();
  return (
    <ul
      className={[
        styles.socialMedia,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
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
  );
}
