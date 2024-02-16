import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import { personalDescription } from '../../info/personalDescription';
import { ResumeScheme } from '../../interfaces/interfaces';
import { BackgroundTech } from '../UI/Anim/BackgroundTech';
import { ButtonCv } from '../UI/Buttons/ButtonCv/ButtonCv';
import { ButtonNavigate } from '../UI/Buttons/ButtonNavigate/ButtonNavigate';
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
      <BackgroundTech />
      <div className={styles.content}>
        <div className={styles.containerResume}>
          {personalDescription.resume.map((paragraph: ResumeScheme) => {
            return (
              <p key={paragraph.id} className={styles.resumeParagraph}>
                {lang == ENGLISH ? paragraph.resumeEN : paragraph.resumeES}
              </p>
            );
          })}
        </div>
        {/* <div className={styles.containerButtons}> */}
        <ButtonCv />
        {/* <ButtonNavigate
            content={lang === ENGLISH ? 'Show more' : 'Ver mas'}
            route="/about-me"
          /> */}
        {/* </div> */}
      </div>
      <div className={styles.containerImage}>
        <img
          className={[styles.image, styles.child1].join(' ')}
          src="/images/selfies/selfie.png"
          alt=""
        />
        <img
          className={[styles.image, styles.child2].join(' ')}
          src="/images/selfies/selfie2.png"
          alt=""
        />
        <img
          className={[styles.image, styles.child3].join(' ')}
          src="/images/selfies/selfie31.png"
          alt=""
        />
      </div>
    </section>
  );
}
