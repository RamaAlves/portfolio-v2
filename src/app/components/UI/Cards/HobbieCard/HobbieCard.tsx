import { ENGLISH } from '../../../../constants/Languages';
import { useLang } from '../../../../hooks/useLang';
import { useTheme } from '../../../../hooks/useTheme';
import { HobbieSchema } from '../../../../interfaces/interfaces';
import styles from './HobbieCard.module.scss';

type Hobbie = {
  hobbie: HobbieSchema;
};

export function HobbieCard({ hobbie }: Hobbie) {
  const { lang } = useLang();
  const { darkMode } = useTheme();
  return (
    <div
      className={[
        styles.container,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <img className={styles.image} src={hobbie.image} alt="imagen hobbie" />
      <p className={styles.paragraph}>
        {lang === ENGLISH ? hobbie.hobbieEN : hobbie.hobbieES}
      </p>
    </div>
  );
}
