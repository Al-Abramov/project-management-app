import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import style from './Task.module.scss';

export const Task = () => {
  return (
    <div className={style.taskWrapper}>
      <textarea className={style.task} name="" id="" cols={30} rows={3}></textarea>
      <IconButton
        sx={{
          position: 'absolute',
          display: 'none',
        }}
        className={style.taskDelete}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
