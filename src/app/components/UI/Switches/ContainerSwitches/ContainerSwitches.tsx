import { LangSwitch } from '../LangSwitch/LangSwitch';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import styles from './ContainerSwitches.module.scss';
export function ContainerSwitches() {
  return (
    <div className={styles.container}>
      <LangSwitch />
      <ThemeSwitch />
    </div>
  );
}
