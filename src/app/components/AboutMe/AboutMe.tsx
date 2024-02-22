import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import { personalDescription } from '../../info/personalDescription';
import { DescriptionScheme, PrhaseScheme } from '../../interfaces/interfaces';
import styles from './AboutMe.module.scss';
import { Hobbies } from '../Hobbies/Hobbies';
import { BannerTitle } from '../UI/Banners/BannerTitles/BannerTitle';

export function AboutMe() {
  const { lang } = useLang();
  const { darkMode } = useTheme();

  return (
    <article
      className={[
        styles.main,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      {/* {lang == ENGLISH ? <h2>About me</h2> : <h2>Sobre mí</h2>} */}
      <BannerTitle esTitle={'Sobre mí'} enTitle={'About me'} />
      <div className={styles.containerInfo}>
        <section className={styles.containerDescription}>
          {personalDescription.description.map(
            (paragraph: DescriptionScheme) => {
              return (
                <p key={paragraph.id}>
                  {lang == ENGLISH
                    ? paragraph.descriptionEN
                    : paragraph.descriptionES}
                </p>
              );
            },
          )}
        </section>
        <Hobbies />
      </div>
      <section className={styles.containerPrhases}>
        <div className={styles.prhases}>
          {personalDescription.prhases.map((prhase: PrhaseScheme) => {
            return <p key={prhase.id}>{prhase.prhase}</p>;
          })}
        </div>
      </section>
    </article>
  );
}
