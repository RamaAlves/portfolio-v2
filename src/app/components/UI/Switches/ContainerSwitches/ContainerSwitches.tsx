import { LangSwitch } from '../LangSwitch/LangSwitch';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import styles from './containerSwitches.module.scss';
export function ContainerSwitches() {
  return (
    <div className={styles.container}>
      <LangSwitch />
      <ThemeSwitch />
    </div>
  );
}
