import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import './App.css';
import { Home } from './screens/Home/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import { LangProvider } from './contexts/LangContext';
import { Projects } from './screens/Projects/Projects';

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
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <LangProvider>
        {/* <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
        <RouterProvider router={router} />
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
