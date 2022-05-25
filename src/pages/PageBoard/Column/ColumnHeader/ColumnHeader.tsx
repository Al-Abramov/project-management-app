import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import style from './ColumnHeader.module.scss';

export const ColumnHeader = () => {
  return (
    <>
      <div className={style.columnBtnContainer}>
        <IconButton
          sx={{ marginRight: '5px' }}
          className={style.columnBtn}
          color="success"
          aria-label="delete"
        >
          <DoneIcon />
        </IconButton>
        <IconButton className={style.columnBtn}>
          <ClearIcon />
        </IconButton>
      </div>
      <input className={style.input} type="text" value="Title" />
      <div>
        <IconButton sx={{ padding: '0' }} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  );
};
