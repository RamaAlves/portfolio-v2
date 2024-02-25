import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import { ButtonCv } from '../UI/Buttons/ButtonCv/ButtonCv';
import { ButtonsSocialMedia } from '../UI/Buttons/ButtonsSocialMedia/ButtonsSocialMedia';
import { CubePresentation } from '../UI/Cube/CubePresentation/CubePresentation';
import styles from './Hero.module.scss';

export function Hero() {
  const { lang } = useLang();
  const { darkMode } = useTheme();
  return (
    <section
      className={[
        styles.hero,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <div className={styles.content}>
        {/* <div className={styles.containerResume}>
          {{personalDescription.resume.map((paragraph: ResumeScheme) => {
            return (
              <p key={paragraph.id} className={styles.resumeParagraph}>
                {lang == ENGLISH ? paragraph.resumeEN : paragraph.resumeES}
              </p>
            );
          })}
        </div>} */}
        <p className={styles.intro}>
          {lang == ENGLISH ? "Hello, I'm " : 'Hola, soy '}
        </p>
        {/* <div className={styles.containerButtons}> */}
        <CubePresentation />
        <ButtonCv />
        {/* <ButtonNavigate
            content={lang === ENGLISH ? 'Show more' : 'Ver mas'}
            route="/about-me"
          /> */}
        {/* </div> */}
      </div>
      <div className={styles.containerLinks}>
        <ButtonsSocialMedia />
      </div>
      {/* <BackgroundTech /> */}
      <div className={styles.containerImage}>
        <img
          className={[styles.image, styles.child1].join(' ')}
          src="/images/selfies/selfie.png"
          alt="selfie con movimiento"
        />
        <img
          className={[styles.image, styles.child2].join(' ')}
          src="/images/selfies/selfie2.png"
          alt="selfie con movimiento"
        />
        <img
          className={[styles.image, styles.child3].join(' ')}
          src="/images/selfies/selfie31.png"
          alt="selfie con movimiento"
        />
      </div>
    </section>
  );
}
