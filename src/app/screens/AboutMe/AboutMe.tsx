import { BackgroundAnimate } from '../../components/UI/Anim/BackgroundAnimate';
import { HobbieCard } from '../../components/UI/Cards/HobbieCard/HobbieCard';
import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import { personalDescription } from '../../info/personalDescription';
import {
  DescriptionScheme,
  HobbieSchema,
  PrhaseScheme,
} from '../../interfaces/interfaces';
import styles from './AboutMe.module.scss';

export function AboutMe() {
  const { lang } = useLang();
  const { darkMode } = useTheme();

  return (
    <main
      className={[
        styles.main,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <BackgroundAnimate />
      {lang == ENGLISH ? <h2>About me</h2> : <h2>Sobre mí</h2>}
      <section className={styles.containerDescription}>
        {personalDescription.description.map((paragraph: DescriptionScheme) => {
          return (
            <p key={paragraph.id}>
              {lang == ENGLISH
                ? paragraph.descriptionEN
                : paragraph.descriptionES}
            </p>
          );
        })}
      </section>
      <section className={styles.containerPrhases}>
        <div className={styles.prhases}>
          {personalDescription.prhases.map((prhase: PrhaseScheme) => {
            return <p key={prhase.id}>{prhase.prhase}</p>;
          })}
        </div>
      </section>
      <section className={styles.containerHobbies}>
        {personalDescription.hobbies.map((hobbie: HobbieSchema) => {
          return <HobbieCard key={hobbie.id} hobbie={hobbie} />;
        })}
      </section>
    </main>
  );
}
