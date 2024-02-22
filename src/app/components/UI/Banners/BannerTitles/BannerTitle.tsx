import { ENGLISH } from '../../../../constants/Languages';
import { useLang } from '../../../../hooks/useLang';
import { BannerTitleType } from '../../../../interfaces/interfaces';
import styles from './BannerTitle.module.scss';

export function BannerTitle({ esTitle, enTitle }: BannerTitleType) {
  const { lang } = useLang();
  return (
    <section className={styles.bannerTitle}>
      <div className={styles.containerTitle}>
        {lang == ENGLISH ? <h2>{enTitle}</h2> : <h2>{esTitle}</h2>}
      </div>
      <span className={styles.bgBars}></span>
      <span className={styles.bars}></span>
      <span className={styles.bars}></span>
      <span className={styles.bars}></span>
      <span className={styles.bars}></span>
      <span className={styles.bars}></span>
      <span className={styles.bars}></span>
    </section>
  );
}
