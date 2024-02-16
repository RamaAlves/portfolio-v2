import { ENGLISH } from '../../../../constants/Languages';
import { useLang } from '../../../../hooks/useLang';
import { useTheme } from '../../../../hooks/useTheme';
import { ProjectSchema } from '../../../../interfaces/interfaces';
import styles from './ProjectCard.module.scss';
type Project = {
  project: ProjectSchema;
};

export function ProjectCard({ project }: Project) {
  const { lang } = useLang();
  const { darkMode } = useTheme();

  return (
    <a
      href={project.link}
      className={[
        styles.cardProject,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
      target="_Blank"
    >
      {lang == ENGLISH ? (
        <>
          <img
            className={styles.image}
            src={project.image}
            alt={'image of ' + project.nameEN}
          />
          <div className={styles.containerResume}>
            <h3 className={styles.title}>{project.nameEN}</h3>
            <p className={styles.resume}>{project.resumeEN}</p>
          </div>
        </>
      ) : (
        <>
          <img
            className={styles.image}
            src={project.image}
            alt={'imagen de ' + project.nameES}
          />
          <div className={styles.containerResume}>
            <h3 className={styles.title}>{project.nameES}</h3>
            <p className={styles.resume}>{project.resumeES}</p>
          </div>
        </>
      )}
    </a>
  );
}
