import { createContext, useEffect, useState } from 'react';
import { ChildrenType, ThemeContextType } from '../interfaces/interfaces';
import { DARK_MODE } from '../constants/localStorageConstants';

export const ThemeContext = createContext<ThemeContextType>(null!);

export function ThemeProvider({ children }: ChildrenType) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const value = { darkMode, setDarkMode };
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem(DARK_MODE)!);
    if (theme) {
      setDarkMode(theme);
    }
  });
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
