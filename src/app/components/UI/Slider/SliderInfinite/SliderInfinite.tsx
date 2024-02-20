import { projects } from '../../../../info/projects';
import styles from './SliderInfinite.module.scss';

export function SliderInfinite() {
  return (
    <div className={styles.slider}>
      {projects.slice(0, 8).map(project => {
        return (
          <div className={styles.slide}>
            <img
              className={styles.image}
              src={project.image}
              alt={'foto de ' + project.nameES}
            />
          </div>
        );
      })}
      {projects.slice(0, 8).map(project => {
        return (
          <div className={styles.slide}>
            <img
              className={styles.image}
              src={project.image}
              alt={'foto de ' + project.nameES}
            />
          </div>
        );
      })}
    </div>
  );
}
