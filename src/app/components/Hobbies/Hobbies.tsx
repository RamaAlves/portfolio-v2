import { ENGLISH } from '../../constants/Languages';
import { useLang } from '../../hooks/useLang';
import { CarrouselHobbies } from '../Carrousel/CarrouselHobbies/CarrouselHobbies';
import styles from './Hobbies.module.scss';
export function Hobbies() {
  const { lang } = useLang();
  return (
    <section className={styles.containerSectionHobbies}>
      {lang == ENGLISH ? <h3>My hobbies</h3> : <h3>Mis hobbies</h3>}
      <CarrouselHobbies />
    </section>
  );
}
