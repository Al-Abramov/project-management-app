import { Task } from '../Task/Task';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import style from './Column.module.scss';
import { ColumnHeader } from './ColumnHeader/ColumnHeader';

interface ColumnProps {
  title: string;
}

export const Column: React.FC<ColumnProps> = (props) => {
  return (
    <Card sx={{ backgroundColor: '#C0C0C0' }} className={style.column} raised>
      <div className={style.columnWrapper}>
        <div className={style.columnHeader}>
          <h4 className={style.columnHeaderTitle}>{props.title}</h4>
          {/*<ColumnHeader />*/}
        </div>
        <div className={style.tasksContainer}>
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
            Создать задачу
          </Button>
        </div>
      </div>
    </Card>
  );
};
