import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <>
      <Header />
      <main className={style.notFound}>
        <div className={style.title}>
          <span className={style.big}>404</span>
          <span>Page Not found</span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageNotFound;
