import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  );
};

export default Layout;
