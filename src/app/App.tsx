import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import './App.css';
import { Home } from './screens/Home/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import { LangProvider } from './contexts/LangContext';
import { Proyects } from './screens/Proyects/Proyects';
import { AboutMe } from './screens/AboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LangProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/proyects" element={<Proyects />} />
              <Route path="/about-me" element={<AboutMe />} />
            </Route>
          </Routes>
        </LangProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
