import { SPANISH, ENGLISH } from '../../../../constants/Languages';
import { LANG } from '../../../../constants/localStorageConstants';
import { useLang } from '../../../../hooks/useLang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import styles from './LangSwitch.module.scss';
import { useTheme } from '../../../../hooks/useTheme';
export function LangSwitch() {
  const { lang, setLang } = useLang();
  const { darkMode } = useTheme();
  function handleLang(language: string) {
    setLang(language);
    localStorage.setItem(LANG, JSON.stringify(language));
  }
  return (
    <div
      className={[
        styles.container,
        darkMode ? styles.darkMode : styles.lightMode,
      ].join(' ')}
    >
      <label htmlFor="lang">
        <FontAwesomeIcon icon={faEarthAmericas} />
        <select
          name="lang"
          id="lang"
          value={lang}
          onChange={e => {
            handleLang(e.target.value);
          }}
        >
          <option value={SPANISH}>{SPANISH}</option>
          <option value={ENGLISH}>{ENGLISH}</option>
        </select>
      </label>
    </div>
  );
}
