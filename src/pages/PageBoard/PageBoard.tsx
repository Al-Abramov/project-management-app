import { useModal } from '../../hooks/useModal';
import { COLUMN_MODAL } from '../../modals/constModal';
import { useAppSelector } from '../../store/hook/hook';
import { Column } from './Column/Column';
import { ModalCreateColumn } from './Modals/ModalCreateColumn/ModalCreateColumn';
import style from './PageBoard.module.scss';
import { TitlePageBoard } from './Title/TitlePageBoard';

const PageBoard = () => {
  const columns = useAppSelector((state) => state.boardReducer.boardInfo.columns);
  const [ColumnModal, onCloseColumn, onOpenColumn, isOpenColumn] = useModal(
    COLUMN_MODAL,
    ModalCreateColumn
  );

  return (
    <div className={style.wrapper}>
      <TitlePageBoard getModal={onOpenColumn} />
      <section className={style.columnsContainer}>
        {columns.map((column) => (
          <Column key={column.id} title={column.title} />
        ))}
        <ColumnModal onClose={onCloseColumn} isOpen={isOpenColumn} />
      </section>
    </div>
  );
};

export default PageBoard;
