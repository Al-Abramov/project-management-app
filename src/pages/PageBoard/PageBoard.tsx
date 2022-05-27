import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LoadSpinner } from '../../components/Spinner/Spinner';
import { useModal } from '../../hooks/useModal';
import { ConfirmModal } from '../../modals/ConfirmModal/ConfirmModal';
import { COLUMN_MODAL, CONFIRM_COLUMN, CONFIRM_MODAL } from '../../modals/constModal';
import { deleteColumn } from '../../services/columns/columns-service';
import { TasksInterface } from '../../services/tasks/interface/tasks.interface';
import { fetchBoardInfo } from '../../store/boardSlice/boardSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook/hook';
import { Column } from './Column/Column';
import { ModalCreateColumn } from './Modals/ModalCreateColumn/ModalCreateColumn';
import style from './PageBoard.module.scss';
import { TitlePageBoard } from './Title/TitlePageBoard';

const PageBoard = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const boardId = id as string;
  const columnId = useAppSelector((state) => state.boardReducer.columnId) as string;

  const columns = useAppSelector((state) => state.boardReducer.boardInfo.columns);
  const isLoading = useAppSelector((state) => state.boardReducer.isLoading);

  const [ColumnModal, onCloseColumn, onOpenColumn, isOpenColumn] = useModal(
    COLUMN_MODAL,
    ModalCreateColumn
  );
  const [ConfirmDelColumn, onCloseConfirm, onOpenConfirm, isOpenConfirm] = useModal(
    CONFIRM_COLUMN,
    ConfirmModal
  );

  const onDeleteColumn = async (idBoard: string, columnId: string) => {
    await deleteColumn(idBoard, columnId);
    getBoardInfo(boardId);
  };

  const getBoardInfo = React.useCallback(
    async (boardId: string) => {
      dispatch(fetchBoardInfo(boardId));
    },
    [dispatch]
  );

  useEffect(() => {
    getBoardInfo(boardId);
  }, [getBoardInfo, boardId]);

  return (
    <div className={style.wrapper}>
      <TitlePageBoard getModal={onOpenColumn} />
      <section className={style.columnsContainer}>
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            order={column.order as number}
            boardId={boardId}
            columnId={column.id as string}
            onOpen={onOpenConfirm}
            tasks={column.tasks as TasksInterface[]}
          />
        ))}
        <ColumnModal onClose={onCloseColumn} isOpen={isOpenColumn} />
        <ConfirmDelColumn
          onClose={onCloseConfirm}
          isOpen={isOpenConfirm}
          title="Удалить колонку?"
          action={() => onDeleteColumn(boardId, columnId)}
        />
      </section>
      {isLoading && <LoadSpinner size={80} />}
    </div>
  );
};

export default PageBoard;
