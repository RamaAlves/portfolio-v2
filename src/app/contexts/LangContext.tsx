import { createContext, useEffect, useState } from 'react';
import { ChildrenType, LangContextType } from '../interfaces/interfaces';
import { LANG } from '../constants/localStorageConstants';

export const LangContext = createContext<LangContextType>(null!);

export function LangProvider({ children }: ChildrenType) {
  const [lang, setLang] = useState<string>('es');
  const value = { lang, setLang };
  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem(LANG)!);
    if (lang) {
      setLang(lang);
    }
  });
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
