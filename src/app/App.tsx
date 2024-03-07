import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import './App.scss';
import { Home } from './screens/Home/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import { LangProvider } from './contexts/LangContext';
import { Projects } from './screens/Projects/Projects';
import { NotFound404 } from './screens/NotFound404/NotFound404';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      /* loader: Layout, */
      children: [
        {
          path: '/',
          element: <Home />,
          /* loader: Home, */
        },
        {
          path: '/Projects',
          element: <Projects />,
          /* loader: Projects, */
        },
        {
          path: '*',
          element: <NotFound404 />,
          /* loader: Projects, */
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <LangProvider>
        <RouterProvider router={router} />
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
