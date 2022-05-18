import { Card } from '@mui/material';
import style from './Board.module.scss';

interface BoardProps {
  title: string;
  description: string;
}

export const Board: React.FC<BoardProps> = (props) => {
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
      <p className={style.titleBoard}>{props.title}</p>
      <p className={style.descrBoard}>{props.description}</p>
      <button className={style.delete}>Delete</button>
    </Card>
  );
};
