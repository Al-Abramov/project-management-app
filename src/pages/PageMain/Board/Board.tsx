import { Card } from '@mui/material';
import style from './Board.module.scss';
import { useAppDispatch } from '../../../store/hook/hook';
import { setId } from '../../../store/boardSlice/boardSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface BoardProps {
  id: string | undefined;
  title: string;
  description: string;
  onOpen: () => void;
}

export const Board: React.FC<BoardProps> = (props) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleDeleteBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (props.id) {
      dispatch(setId(props.id));
    }
    props.onOpen();
  };

  const setBoardId = () => {
    if (props.id) {
      localStorage.setItem('boardId', props.id);
      dispatch(setId(props.id));
    }
  };

  const redirectBoard = async () => {
    setBoardId();
    navigate(`/board/${props.id}`);
  };

  return (
    <Card
      raised
      sx={{
        width: '300px',
        minHeight: '160px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '20px',
        padding: '10px',
        cursor: 'pointer',
      }}
      className={style.board}
      onClick={redirectBoard}
    >
      <p className={style.titleBoard}>{props.title}</p>
      <p className={style.descrBoard}>{props.description}</p>
      <IconButton
        sx={{
          display: 'flex',
          alignSelf: 'flex-end',
          marginTop: '25px',
          fontSize: '14px',
        }}
        aria-label="delete"
        onClick={handleDeleteBtn}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};
