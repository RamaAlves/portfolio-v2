import { useEffect, useState } from 'react';
import { ENGLISH } from '../../../../constants/Languages';
import { useLang } from '../../../../hooks/useLang';
import { useTheme } from '../../../../hooks/useTheme';
import { HobbieSchema } from '../../../../interfaces/interfaces';
import styles from './HobbieCard.module.scss';

type Hobbie = {
  hobbie: HobbieSchema;
  visible: boolean;
};

export function HobbieCard({ hobbie, visible }: Hobbie) {
  const { lang } = useLang();
  const { darkMode } = useTheme();
  const [indexImage, setIndexImage] = useState<number>(0);
  let totalImage = hobbie.image.length;
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexImage == totalImage - 1) {
        setIndexImage(0);
      } else {
        setIndexImage(indexImage + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [indexImage]);
  return (
    <div
      className={[
        visible ? styles.cardHobbie : styles.cardHobbieHidden,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <img
        className={styles.image}
        src={hobbie.image[indexImage]}
        alt="imagen hobbie"
      />
      <p className={styles.paragraph}>
        {lang === ENGLISH ? hobbie.hobbieEN : hobbie.hobbieES}
      </p>
    </div>
  );
}
