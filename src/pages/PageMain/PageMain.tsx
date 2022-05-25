import React, { useEffect } from 'react';
import { LoadSpinner } from '../../components/Spinner/Spinner';
import { useModal } from '../../hooks/useModal';
import { ConfirmModal } from '../../modals/ConfirmModal/ConfirmModal';
import { BOARD_MODAL, CONFIRM_MODAL } from '../../modals/constModal';
import { deleteBoard } from '../../services/boards/board-service';
import { fetchAllBoard } from '../../store/allBoardsSlice/allBoardsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook/hook';
import { Board } from './Board/Board';
import { ModalCreateBoard } from './Modal/ModalCreateBoard';
import style from './PageMain.module.scss';
import { TitlePageMain } from './Title/TitlePageMain';

const PageMain = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.allBoardsReducer.boards);
  const isLoading = useAppSelector((state) => state.allBoardsReducer.isLoading);
  const idBoard = useAppSelector((state) => state.boardReducer.id) as string;

  const [BoardModal, onClose, onOpen, isOpen] = useModal(BOARD_MODAL, ModalCreateBoard);
  const [ConfirmDelBoardModal, onCloseConfirm, onOpenConfirm, isOpenConfirm] = useModal(
    CONFIRM_MODAL,
    ConfirmModal
  );

  const getBoardsData = React.useCallback(async () => {
    dispatch(fetchAllBoard());
  }, [dispatch]);

  const deletePageMainBoard = async (idBoard: string) => {
    await deleteBoard(idBoard);
    getBoardsData();
  };

  useEffect(() => {
    getBoardsData();
  }, [getBoardsData]);

  return (
    <div className={style.warapper}>
      <TitlePageMain getModal={onOpen} />
      <section className={style.boardsWrap}>
        {data.map((board) => (
          <Board
            key={board.id}
            id={board.id}
            title={board.title}
            description={board.description}
            onOpen={onOpenConfirm}
          />
        ))}
        <BoardModal onClose={onClose} isOpen={isOpen} />
        <ConfirmDelBoardModal
          onClose={onCloseConfirm}
          isOpen={isOpenConfirm}
          title="Удалить доску?"
          action={() => deletePageMainBoard(idBoard)}
        />
        {isLoading && <LoadSpinner size={80} />}
      </section>
    </div>
  );
};

export default PageMain;
