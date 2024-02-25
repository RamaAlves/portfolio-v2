import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CarrouselImagesHobbies.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../hooks/useTheme';
import { useState } from 'react';

type CarrouselImagesHobbiesType = {
  images: string[];
};

export function CarrouselImagesHobbies({ images }: CarrouselImagesHobbiesType) {
  const { darkMode } = useTheme();
  const [slide, setSlide] = useState<number>(0);

  function nextSlide() {
    setSlide(slide >= images.length - 1 ? 0 : slide + 1);
  }
  function prevSlide() {
    setSlide(slide <= 0 ? images.length - 1 : slide - 1);
  }
  return (
    <div
      className={[
        styles.carrouselImagesHobbies,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      {images.map((image: string, i: number) => {
        return (
          <img
            className={[
              styles.image,
              slide === i ? styles.show : styles.hide,
            ].join(' ')}
            key={i}
            src={image}
          />
        );
      })}
      {images.length > 1 && (
        <>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={[styles.arrow, styles.arrowLeft].join(' ')}
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className={[styles.arrow, styles.arrowRight].join(' ')}
            onClick={nextSlide}
          />
          <span className={styles.indicators}>
            {images.map((_, i) => {
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
        </>
      )}
    </div>
  );
}
