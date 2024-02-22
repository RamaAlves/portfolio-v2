import { Link } from 'react-router-dom';
import styles from './NotFound404.module.scss';
import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { BackgroundAnimate } from '../../components/UI/Anim/BackgroundAnimate';

export function NotFound404() {
  const { lang } = useLang();
  return (
    <main className={styles.main}>
      <BackgroundAnimate />
      <img src="/images/notFound/4043.jpg" alt="" className={styles.image} />
      <div className={styles.info}>
        {lang === ENGLISH ? (
          <>
            <h1 className={styles.title}>Page not found</h1>
            <p className={styles.description}>
              Please check the path or click{' '}
              <Link to={'/'} unstable_viewTransition>
                "here"
              </Link>{' '}
              to return to home
            </p>
          </>
        ) : (
          <>
            <h1 className={styles.title}>Página no encontrada</h1>
            <p className={styles.description}>
              por favor revisa la ruta o haz clic{' '}
              <Link to={'/'} unstable_viewTransition>
                "aquí"
              </Link>{' '}
              para regresar a inicio
            </p>
          </>
        )}
      </div>
    </main>
  );
}
