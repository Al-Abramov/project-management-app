import { Portal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAllBoards } from '../../services/boards/board-service';
import { BoardInterface } from '../../services/boards/interfaces/BoardInterface';
import { Board } from './Board/Board';
import { ModalCreateBoard } from './Modal/ModalCreateBoard';
import style from './PageMain.module.scss';
import { TitlePageMain } from './Title/TitlePageMain';

const PageMain = () => {
  const [data, setData] = useState<BoardInterface[]>([]);
  const [modal, setModal] = useState(false);

  const getBoardsData = React.useCallback(async () => {
    const data = await getAllBoards();
    setData(data);
  }, []);

  const getModal = () => {
    setModal(true);
  };

  useEffect(() => {
    getBoardsData();
  }, [getBoardsData]);

  return (
    <main className={style.main}>
      <div className={style.warapper}>
        <TitlePageMain getModal={getModal} />
        <section className={style.boardsWrap}>
          {data.map((board) => (
            <Board key={board.id} title={board.title} description={board.description} />
          ))}
          {modal && (
            <Portal>
              <ModalCreateBoard />
            </Portal>
          )}
        </section>
      </div>
    </main>
  );
};

export default PageMain;
