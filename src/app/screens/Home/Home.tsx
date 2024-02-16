import { ProjectCard } from '../../components/UI/Cards/ProjectCard/ProjectCard';
import { ProjectSchema } from '../../interfaces/interfaces';
import { projects } from '../../info/projects';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import styles from './Home.module.scss';
import { ButtonNavigate } from '../../components/UI/Buttons/ButtonNavigate/ButtonNavigate';
import { ENGLISH } from '../../constants/Languages';
import { Divisor } from '../../components/UI/Anim/Divisor';
import { BackgroundAnimate } from '../../components/UI/Anim/BackgroundAnimate';
import { Hero } from '../../components/Hero/Hero';
import { AboutMe } from '../../components/AboutMe/AboutMe';

export function Home() {
  const { lang } = useLang();
  const { darkMode } = useTheme();

  let egProjects = projects.slice(0, 2);
  return (
    <main
      className={[
        styles.main,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <BackgroundAnimate />
      <Hero />
      <Divisor />
      <section className={styles.projects}>
        {lang == ENGLISH ? <h2>Last projects</h2> : <h2>Ultimos proyectos</h2>}
        {
          <div className={styles.containerProjects}>
            {egProjects.map((project: ProjectSchema) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </div>
        }
        {lang == ENGLISH ? (
          <ButtonNavigate content="Show more" route="/projects" />
        ) : (
          <ButtonNavigate content="Ver todos" route="/projects" />
        )}
      </section>
      <AboutMe />
    </main>
  );
}
