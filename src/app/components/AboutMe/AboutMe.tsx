import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import { personalDescription } from '../../info/personalDescription';
import { DescriptionScheme, PrhaseScheme } from '../../interfaces/interfaces';
import styles from './AboutMe.module.scss';
import { BannerTitle } from '../UI/Banners/BannerTitles/BannerTitle';
import { ArticleHobbies } from '../Hobbies/ArticleHobbies/ArticleHobbies';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function AboutMe() {
  const { lang } = useLang();
  const { darkMode } = useTheme();
  const [rotatePage, setRotatePage] = useState<boolean>(false);

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
        <div
          className={[
            styles.containerFaces,
            rotatePage ? styles.rotateContainer : styles.initialContainer,
          ].join(' ')}
        >
          <div className={[styles.faceOne, styles.faces].join(' ')}>
            <article className={styles.containerDescription}>
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
            </article>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={styles.buttonNextPage}
              onClick={() => {
                setRotatePage(!rotatePage);
              }}
            />
          </div>
          <div className={[styles.faceTwo, styles.faces].join(' ')}>
            <ArticleHobbies />
            <FontAwesomeIcon
              icon={faAngleLeft}
              className={styles.buttonPrevPage}
              onClick={() => {
                setRotatePage(!rotatePage);
              }}
            />
            {/* <Hobbies /> */}
          </div>
        </div>
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
