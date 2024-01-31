import { ProyectCard } from '../../components/UI/Cards/ProyectCard/ProyectCard';
import { ProyectSchema, ResumeScheme } from '../../interfaces/interfaces';
import { proyects } from '../../info/proyects';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import styles from './Home.module.scss';
import { ButtonNavigate } from '../../components/UI/Buttons/ButtonNavigate/ButtonNavigate';
import { ENGLISH } from '../../constants/Languages';
import { personalDescription } from '../../info/personalDescription';
import { ButtonCv } from '../../components/UI/Buttons/ButtonCv/ButtonCv';
import { BackgroundTech } from '../../components/UI/Anim/BackgroundTech';
import { Divisor } from '../../components/UI/Anim/Divisor';
import { BackgroundAnimate } from '../../components/UI/Anim/BackgroundAnimate';

export function Home() {
  const { lang } = useLang();
  const { darkMode } = useTheme();

  let egProyects = proyects.slice(0, 2);
  return (
    <main
      className={[
        styles.main,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <BackgroundAnimate />
      <section className={styles.resume}>
        <BackgroundTech />
        <div className={styles.content}>
          <div className={styles.containerResume}>
            {personalDescription.resume.map((paragraph: ResumeScheme) => {
              return (
                <p key={paragraph.id} className={styles.resumeParagraph}>
                  {lang == ENGLISH ? paragraph.resumeEN : paragraph.resumeES}
                </p>
              );
            })}
          </div>
          <div className={styles.containerButtons}>
            <ButtonCv />
            <ButtonNavigate
              content={lang === ENGLISH ? 'Show more' : 'Ver mas'}
              route="/about-me"
            />
          </div>
        </div>
      </section>
      <Divisor />
      <section className={styles.proyects}>
        {lang == ENGLISH ? <h2>Last proyects</h2> : <h2>Ultimos proyectos</h2>}
        {
          <div className={styles.containerProyects}>
            {egProyects.map((proyect: ProyectSchema) => {
              return <ProyectCard key={proyect.id} proyect={proyect} />;
            })}
          </div>
        }
        {lang == ENGLISH ? (
          <ButtonNavigate content="Show more" route="/proyects" />
        ) : (
          <ButtonNavigate content="Ver todos" route="/proyects" />
        )}
      </section>
    </main>
  );
}
