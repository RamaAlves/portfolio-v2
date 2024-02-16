import { useLang } from '../../hooks/useLang';
import { ENGLISH } from '../../constants/Languages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { useInView } from 'react-intersection-observer';

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
        {lang == ENGLISH ? (
          <p className={styles.contactMe}>Contact me!</p>
        ) : (
          <p className={styles.contactMe}>Contactame!</p>
        )}
        {/* <a
        href="https://wa.me/+5493624268960?text=Hola!%20contactame%20si%20deseas%20coordinar%20una%20entrevista!%20(☞ﾟヮﾟ)☞"
        target="_blank"
        >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a> */}
        <ul className={styles.contacts}>
          <a href="https://www.linkedin.com/in/ramaalves" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            <p>LinkedIn</p>
          </a>
          {/* <a href="https://t.me/RamiroAlves" target="_blank">
        <FontAwesomeIcon icon={faTelegram} />
      </a> */}
          <a href="https://github.com/RamaAlves" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            <p>GitHub</p>
          </a>
          <a href="mailto:ramiroalvesprof@outlook.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Email</p>
          </a>
        </ul>
        <p className={styles.copy}>©️ 2024</p>
      </footer>
    </>
  );
}
