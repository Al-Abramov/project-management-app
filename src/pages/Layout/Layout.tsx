import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
};

export default Layout;
