import { BackgroundAnimate } from '../../components/UI/Anim/BackgroundAnimate';
import { ProjectCard } from '../../components/UI/Cards/ProjectCard/ProjectCard';
import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import { projects } from '../../info/projects';
import { ProjectSchema } from '../../interfaces/interfaces';
import styles from './Projects.module.scss';

export function Projects() {
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
      {lang == ENGLISH ? <h2>My projects</h2> : <h2>Mis proyectos</h2>}
      <section className={styles.projects}>
        {projects.map((project: ProjectSchema) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </section>
    </main>
  );
}
