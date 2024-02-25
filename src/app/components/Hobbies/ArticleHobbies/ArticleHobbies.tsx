import { ENGLISH } from '../../../constants/Languages';
import { useLang } from '../../../hooks/useLang';
import { useTheme } from '../../../hooks/useTheme';
import { personalDescription } from '../../../info/personalDescription';
import { CarrouselImagesHobbies } from '../../Carrousel/CarrouselImagesHobbies/CarrouselImagesHobbies';
import styles from './ArticleHobbies.module.scss';

export function ArticleHobbies() {
  const { hobbies } = personalDescription;
  const { lang } = useLang();
  const { darkMode } = useTheme();

  return (
    <article
      className={[
        styles.containerHobbies,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <h3 className={styles.title}>
        {lang === ENGLISH ? 'My hobbies' : 'Mis hobbies'}
      </h3>
      {hobbies.map(hobbie => {
        return (
          <div className={styles.hobbie} key={hobbie.id}>
            <CarrouselImagesHobbies images={hobbie.image} />
            <p className={styles.paragraph}>
              {lang === ENGLISH ? hobbie.hobbieEN : hobbie.hobbieES}
            </p>
          </div>
        );
      })}
    </article>
  );
}
