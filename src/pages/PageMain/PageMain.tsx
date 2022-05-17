import { Board } from './Board/Board';
import style from './PageMain.module.scss';
import { TitlePageMain } from './Title/TitlePageMain';

const PageMain = () => {
  return (
    <main className={style.main}>
      <div className={style.warapper}>
        <TitlePageMain />
        <section className={style.boardsWrap}>
          <Board />
        </section>
      </div>
    </main>
  );
};

export default PageMain;
