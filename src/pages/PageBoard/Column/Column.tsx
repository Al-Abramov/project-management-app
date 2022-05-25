import { Task } from '../Task/Task';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import style from './Column.module.scss';

export const Column = () => {
  return (
    <Card className={style.column} raised>
      <div className={style.columnWrapper}>
        <div className={style.columnHeader}>
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
        </div>
        <div className={style.tasksContainer}>
          <Task />
          <Task />
          <Task />
        </div>
        <div className={style.taskBtnContainer}>
          <Button
            className={style.taskBtn}
            sx={{
              textTransform: 'none',
              fontSize: '14px',
            }}
            variant="contained"
          >
            Создать колонку
          </Button>
          {/*<button className={style.taskBtn}>Создать задачу</button>*/}
        </div>
      </div>
    </Card>
  );
};
