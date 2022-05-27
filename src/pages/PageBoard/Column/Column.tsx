import { Task } from '../Task/Task';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import style from './Column.module.scss';
import { ColumnHeader } from './ColumnHeader/ColumnHeader';
import { setColumnId } from '../../../store/boardSlice/boardSlice';
import { useAppDispatch } from '../../../store/hook/hook';
import { getAllTasks } from '../../../services/tasks/tasks-service';
import React, { useEffect, useState } from 'react';
import { TasksInterface } from '../../../services/tasks/interface/tasks.interface';
import { TASK_MODAL } from '../../../modals/constModal';
import { ModalCreateTask } from '../Modals/CreateTaskModal/ModalCreateTask';
import { useModal } from '../../../hooks/useModal';
import { ColumnTitle } from './ColumnHeader/ColumnTitle';

interface ColumnProps {
  title: string;
  order: number;
  columnId: string;
  boardId: string;
  tasks: TasksInterface[];
  onOpen: () => void;
}

export const Column: React.FC<ColumnProps> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [isInput, setIsInut] = useState(false);

  const dispatch = useAppDispatch();

  const [TaskModal, onCloseTask, onOpenTask, isOpenTask] = useModal(TASK_MODAL, ModalCreateTask);

  const handleTitleClick = () => {
    setIsInut(isInput ? false : true);
  };

  /*const getTasks = React.useCallback(async (boardId: string, columnId: string) => {
    const data = await getAllTasks(boardId, columnId);
    setTasks(data);
  }, []);*/

  const handleDeleteBtn = () => {
    dispatch(setColumnId(props.columnId));
    props.onOpen();
  };

  const handleCreateTask = () => {
    onOpenTask();
    dispatch(setColumnId(props.columnId));
  };

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  /*useEffect(() => {
    getTasks(props.boardId, props.columnId);
  }, [getTasks, props.boardId, props.columnId]);*/

  return (
    <Card sx={{ backgroundColor: '#C0C0C0' }} className={style.column} raised>
      <div className={style.columnWrapper}>
        <div className={style.columnHeader}>
          {isInput ? (
            <ColumnHeader
              handleTitleClick={handleTitleClick}
              value={title}
              boardId={props.boardId}
              columnId={props.columnId}
              order={props.order}
              changeTitle={changeTitle}
            />
          ) : (
            <ColumnTitle title={title} handleTitleClick={handleTitleClick} />
          )}
          <div>
            <IconButton sx={{ padding: '0' }} aria-label="delete" onClick={handleDeleteBtn}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <div className={style.tasksContainer}>
          {props.tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              order={task.order as number}
              taskId={task.id as string}
              boardId={props.boardId}
              columnId={props.columnId}
            />
          ))}
        </div>
        <div className={style.taskBtnContainer}>
          <Button
            className={style.taskBtn}
            sx={{
              textTransform: 'none',
              fontSize: '14px',
            }}
            variant="contained"
            onClick={handleCreateTask}
          >
            Создать задачу
          </Button>
        </div>
      </div>
      <TaskModal onClose={onCloseTask} isOpen={isOpenTask} />
    </Card>
  );
};
