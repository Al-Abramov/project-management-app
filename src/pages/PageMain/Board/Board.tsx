import { Card } from '@mui/material';
import style from './Board.module.scss';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../../store/hook/hook';
import { setId } from '../../../store/boardSlice/boardSlice';

interface BoardProps {
  id: string | undefined;
  title: string;
  description: string;
  onOpen: () => void;
}

export const Board: React.FC<BoardProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleDeleteBtn = () => {
    if (props.id) {
      dispatch(setId(props.id));
    }
    props.onOpen();
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
    >
      <p className={style.titleBoard}>{props.title}</p>
      <p className={style.descrBoard}>{props.description}</p>
      <Button
        sx={{
          display: 'flex',
          alignSelf: 'flex-end',
          marginTop: '15px',
          width: '70px',
          fontSize: '14px',
          textTransform: 'none',
          height: '30px',
          cursor: 'pointer',
        }}
        variant="text"
        color="error"
        onClick={handleDeleteBtn}
      >
        Удалить
      </Button>
    </Card>
  );
};
