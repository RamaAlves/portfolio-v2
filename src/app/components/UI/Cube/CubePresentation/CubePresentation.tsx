import { ENGLISH } from '../../../../constants/Languages';
import { useLang } from '../../../../hooks/useLang';
import { useTheme } from '../../../../hooks/useTheme';
import styles from './CubePresentation.module.scss';

export function CubePresentation() {
  const { lang } = useLang();
  const { darkMode } = useTheme();
  return (
    <div
      className={[
        styles.container,
        darkMode ? styles.darkCube : styles.lightCube,
      ].join(' ')}
    >
      <div className={styles.cube}>
        <div className={[styles.face, styles.faceFront].join(' ')}>
          <p>Ramiro Alves</p>
        </div>
        <div className={[styles.face, styles.faceBottom].join(' ')}>
          <p>
            {lang == ENGLISH ? 'Frontend Developer' : 'Desarrollador Frontend'}
          </p>
        </div>
        <div className={[styles.face, styles.faceBack].join(' ')}>
          <p>{lang == ENGLISH ? 'React Developer' : 'Desarrollador React'}</p>
        </div>
        <div className={[styles.face, styles.faceTop].join(' ')}>
          {' '}
          <p>{lang == ENGLISH ? 'Musician' : 'Músico'}</p>
        </div>
        <div className={[styles.face, styles.faceRight].join(' ')}></div>
        <div className={[styles.face, styles.faceLeft].join(' ')}></div>
      </div>
    </div>
  );
}
