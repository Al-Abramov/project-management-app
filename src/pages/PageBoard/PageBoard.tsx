import { Column } from './Column/Column';
import style from './PageBoard.module.scss';
import { TitlePageBoard } from './Title/TitlePageBoard';

const PageBoard = () => {
  return (
    <div className={style.wrapper}>
      <TitlePageBoard />
      <section className={style.columnsContainer}>
        <Column />
      </section>
    </div>
  );
};

export default PageBoard;
