import Button from '@mui/material/Button';
import style from './TitlePageBoard.module.scss';

export const TitlePageBoard = () => {
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
        >
          Вернуться к доскам
        </Button>
      </div>
    </section>
  );
};
