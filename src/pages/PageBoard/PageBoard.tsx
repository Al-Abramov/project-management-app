import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LoadSpinner } from '../../components/Spinner/Spinner';
import { useModal } from '../../hooks/useModal';
import { COLUMN_MODAL } from '../../modals/constModal';
import { deleteColumn } from '../../services/columns/columns-service';

import { fetchBoardInfo } from '../../store/boardSlice/boardSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook/hook';

import { ModalCreateColumn } from './Modals/ModalCreateColumn/ModalCreateColumn';
import style from './PageBoard.module.scss';
import { TitlePageBoard } from './Title/TitlePageBoard';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ListColumns from '../../components/ListColumns/ListColumns';

const PageBoard = () => {
  const isLoading = useAppSelector((state) => state.boardReducer.isLoading);

  const [ColumnModal, onCloseColumn, onOpenColumn, isOpenColumn] = useModal(
    COLUMN_MODAL,
    ModalCreateColumn
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={style.wrapper}>
        <TitlePageBoard getModal={onOpenColumn} />
        <ListColumns
          ColumnModal={ColumnModal}
          onCloseColumn={onCloseColumn}
          isOpenColumn={isOpenColumn}
        />
        {isLoading && <LoadSpinner size={80} />}
      </div>
    </DndProvider>
  );
};

export default PageBoard;
