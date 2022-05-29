import React from 'react';
import { useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { useParams } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { CONFIRM_COLUMN } from '../../modals/constModal';
import { Column } from '../../pages/PageBoard/Column/Column';
import { ItemTypes } from '../../pages/PageBoard/ItemTypes';
import { deleteColumn } from '../../services/columns/columns-service';
import { TasksInterface } from '../../services/tasks/interface/tasks.interface';
import { fetchBoardInfo } from '../../store/boardSlice/boardSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook/hook';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import style from './ListColumns.module.scss';

interface PropsListColumns {
  ColumnModal: React.FC<ModalProps>;
  onCloseColumn: () => void;
  isOpenColumn: boolean;
}

const ListColumns = ({ ColumnModal, onCloseColumn, isOpenColumn }: PropsListColumns) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    /* canDrop: () => game.canMoveKnight(x, y),
    drop: () => game.moveKnight(x, y), */
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const { id } = useParams();

  const boardId = id as string;

  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.boardReducer.boardInfo.columns);
  const columnId = useAppSelector((state) => state.boardReducer.columnId) as string;

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
    <section className={style.columnsContainer} ref={drop}>
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
  );
};

export default ListColumns;
