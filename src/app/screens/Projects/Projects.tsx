import { BackgroundAnimate } from '../../components/UI/Anim/BackgroundAnimate';
import { BannerTitle } from '../../components/UI/Banners/BannerTitles/BannerTitle';
import { ProjectCard } from '../../components/UI/Cards/ProjectCard/ProjectCard';
/* import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang'; */
import { useTheme } from '../../hooks/useTheme';
import { projects } from '../../info/projects';
import { ProjectSchema } from '../../interfaces/interfaces';
import styles from './Projects.module.scss';

export function Projects() {
  /* const { lang } = useLang(); */
  const { darkMode } = useTheme();
  return (
    <main
      className={[
        styles.main,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <BackgroundAnimate />
      <BannerTitle esTitle={'Mis Proyectos'} enTitle={'My projects'} />
      {/* <div className={styles.bannerTitle}>
        <div className={styles.containerTitle}>
          {lang == ENGLISH ? <h2>My projects</h2> : <h2>Mis proyectos</h2>}
        </div>
        <span className={styles.bgBars}></span>
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
      </div> */}
      <section className={styles.projects}>
        {/* {projects.slice(0, 1).map((project: ProjectSchema) => {
          return (
            <div className={styles.marginLg} key={project.id}>
              <ProjectCard project={project} />
            </div>
          );
        })} */}
        {projects.map((project: ProjectSchema) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </section>
    </main>
  );
}
