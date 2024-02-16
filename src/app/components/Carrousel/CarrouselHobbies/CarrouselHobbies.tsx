import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalDescription } from '../../../info/personalDescription';
import { HobbieSchema } from '../../../interfaces/interfaces';
import { HobbieCard } from '../../UI/Cards/HobbieCard/HobbieCard';
import styles from './CarrouselHobbie.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useTheme } from '../../../hooks/useTheme';
export function CarrouselHobbies() {
  const { hobbies } = personalDescription;
  const { darkMode } = useTheme();
  const [slide, setSlide] = useState<number>(0);

  function nextSlide() {
    setSlide(slide >= hobbies.length - 1 ? 0 : slide + 1);
  }
  function prevSlide() {
    setSlide(slide <= 0 ? hobbies.length - 1 : slide - 1);
  }
  return (
    <div
      className={[
        styles.carrouselHobbies,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={[styles.arrow, styles.arrowLeft].join(' ')}
        onClick={prevSlide}
      />
      {hobbies.map((hobbie: HobbieSchema, i: number) => {
        return (
          <HobbieCard visible={slide === i} key={hobbie.id} hobbie={hobbie} />
        );
      })}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={[styles.arrow, styles.arrowRight].join(' ')}
        onClick={nextSlide}
      />
      <span className={styles.indicators}>
        {hobbies.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setSlide(i);
              }}
              className={
                slide === i
                  ? styles.indicator
                  : [styles.indicator, styles.indicatorInactive].join(' ')
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}
