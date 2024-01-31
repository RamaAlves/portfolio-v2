export interface HobbieSchema {
  id: string;
  hobbieEN: string;
  hobbieES: string;
  image: string;
}
export interface DescriptionScheme {
  id: string;
  descriptionEN: string;
  descriptionES: string;
}
export interface ResumeScheme {
  id: string;
  resumeEN: string;
  resumeES: string;
}
export interface PrhaseScheme {
  id: string;
  prhase: string;
}
export interface ProyectSchema {
  id: string;
  nameES: string;
  nameEN: string;
  resumeES: string;
  resumeEN: string;
  image: string;
  link: string;
}

export interface ChildrenType {
  children: React.ReactNode;
}

export interface ButtonNavigateType{
  content: string;
  route: string;
}

export interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LangContextType {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}
