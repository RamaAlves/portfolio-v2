import { ENGLISH } from '../../../../constants/Languages';
import { useLang } from '../../../../hooks/useLang';
import { useTheme } from '../../../../hooks/useTheme';
import { ProyectSchema } from '../../../../interfaces/interfaces';
import styles from './ProyectCard.module.scss';
type Proyect = {
  proyect: ProyectSchema;
};

export function ProyectCard({ proyect }: Proyect) {
  const { lang } = useLang();
  const { darkMode } = useTheme();

  return (
    <a
      href={proyect.link}
      className={[
        styles.cardProyect,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
      target="_Blank"
    >
      {lang == ENGLISH ? (
        <>
          <img
            className={styles.image}
            src={proyect.image}
            alt={'image of ' + proyect.nameEN}
          />
          <div className={styles.containerResume}>
            <h3 className={styles.title}>{proyect.nameEN}</h3>
            <p className={styles.resume}>{proyect.resumeEN}</p>
          </div>
        </>
      ) : (
        <>
          <img
            className={styles.image}
            src={proyect.image}
            alt={'imagen de ' + proyect.nameES}
          />
          <div className={styles.containerResume}>
            <h3 className={styles.title}>{proyect.nameES}</h3>
            <p className={styles.resume}>{proyect.resumeES}</p>
          </div>
        </>
      )}
    </a>
  );
}
