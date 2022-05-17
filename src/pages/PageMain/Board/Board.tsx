import { Card } from '@mui/material';
import style from './Board.module.scss';

export const Board = () => {
  return (
    <Card
      raised
      sx={{
        width: '300px',
        height: '160px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      <p className={style.titleBoard}>Description desk</p>
      <p className={style.descrBoard}>Title desk name</p>
      <button className={style.delete}>Delete</button>
    </Card>
  );
};
