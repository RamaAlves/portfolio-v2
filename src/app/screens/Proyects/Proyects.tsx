import { BackgroundAnimate } from '../../components/UI/Anim/BackgroundAnimate';
import { ProyectCard } from '../../components/UI/Cards/ProyectCard/ProyectCard';
import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { useTheme } from '../../hooks/useTheme';
import { proyects } from '../../info/proyects';
import { ProyectSchema } from '../../interfaces/interfaces';
import styles from './Proyects.module.scss';

export function Proyects() {
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
      {lang == ENGLISH ? <h2>My proyects</h2> : <h2>Mis proyectos</h2>}
      <section className={styles.proyects}>
        {proyects.map((proyect: ProyectSchema) => {
          return <ProyectCard key={proyect.id} proyect={proyect} />;
        })}
      </section>
    </main>
  );
}
