import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import style from './TitlePageBoard.module.scss';

interface TitlePageBoardProps {
  getModal: () => void;
}

export const TitlePageBoard: React.FC<TitlePageBoardProps> = (props) => {
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };

  const callModal = () => {
    props.getModal();
  };

  return (
    <section className={style.titleContainer}>
      <div>
        <Button
          className={style.createBtn}
          sx={{
            textTransform: 'none',
            fontSize: '14px',
          }}
          variant="contained"
          onClick={callModal}
        >
          Создать колонку
        </Button>
      </div>
      <div className={style.title}>Title board</div>
      <div>
        <Button
          className={style.btnBack}
          sx={{
            textTransform: 'none',
            fontSize: '14px',
            padding: '0 5px',
          }}
          variant="outlined"
          onClick={getBack}
        >
          Вернуться к доскам
        </Button>
      </div>
    </section>
  );
};
