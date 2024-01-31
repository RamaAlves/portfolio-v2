import { Outlet } from 'react-router-dom';
import { Nav } from '../Nav/Nav.tsx';
import { Footer } from '../Footer/Footer.tsx';

export function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
