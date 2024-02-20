import { ButtonProjects } from '../../Buttons/ButtonProjects/ButtonProjects';
import { SliderInfinite } from '../../Slider/SliderInfinite/SliderInfinite';
import styles from './BannerProjects.module.scss';
export function BannerProjects() {
  return (
    <section className={styles.banner}>
      <SliderInfinite />
      <span className={styles.glass}></span>
      <ButtonProjects />
    </section>
  );
}
