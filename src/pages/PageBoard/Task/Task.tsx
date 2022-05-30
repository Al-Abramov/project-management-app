import DeleteIcon from '@mui/icons-material/Delete';
import { TextareaAutosize } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useRef, useState } from 'react';
import { useModal } from '../../../hooks/useModal';
import { ConfirmModal } from '../../../modals/ConfirmModal/ConfirmModal';
import { CONFIRM_TASK } from '../../../modals/constModal';
import { deleteTasks, updateTasks } from '../../../services/tasks/tasks-service';
import { deleteTaskFromState, setColumnId } from '../../../store/boardSlice/boardSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hook/hook';
import style from './Task.module.scss';

interface TaskProps {
  title: string;
  description: string;
  order: number;
  taskId: string;
  boardId: string;
  columnId: string;
}

export const Task: React.FC<TaskProps> = (props) => {
  const [updateMessage, setUpdateMessage] = useState(false);

  const titleRef: React.RefObject<HTMLTextAreaElement> = useRef(null);
  const descrRef: React.RefObject<HTMLTextAreaElement> = useRef(null);

  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state.authReducer.id);

  const [ConfirmDelTask, onCloseConfirmTask, onOpenConfirmTask, isOpenConfirmTask] = useModal(
    CONFIRM_TASK + props.taskId,
    ConfirmModal
  );

  const openConfirm = () => {
    dispatch(setColumnId(props.columnId));
    onOpenConfirmTask();
  };

  const onDeleteTask = async (boardId: string, columnId: string, taskId: string) => {
    await deleteTasks(boardId, columnId, taskId);
    onCloseConfirmTask();
    dispatch(deleteTaskFromState(props.taskId));
  };

  const onUpdateTask = async () => {
    const obj = {
      title: titleRef.current?.value ? titleRef.current?.value : ' ',
      order: props.order,
      description: descrRef.current?.value ? descrRef.current?.value : ' ',
      userId: userId,
      boardId: props.boardId,
      columnId: props.columnId,
    };
    setUpdateMessage(true);
    setTimeout(() => setUpdateMessage(false), 1500);
    await updateTasks(props.boardId, props.columnId, props.taskId, obj);
  };

  return (
    <div className={style.taskWrapper}>
      <div className={style.task}>
        {updateMessage && <div className={style.updateMess}>&#10003; Обновлено</div>}
        <TextareaAutosize
          ref={titleRef}
          className={style.taskTitle}
          defaultValue={props.title}
          onBlur={() => onUpdateTask()}
        />
        <TextareaAutosize
          ref={descrRef}
          className={style.description}
          defaultValue={props.description}
          onBlur={() => onUpdateTask()}
        />
      </div>
      <IconButton
        sx={{
          position: 'absolute',
          display: 'none',
        }}
        className={style.taskDelete}
        aria-label="delete"
        onClick={openConfirm}
      >
        <DeleteIcon />
      </IconButton>
      <ConfirmDelTask
        onClose={onCloseConfirmTask}
        isOpen={isOpenConfirmTask}
        title="Удалить задачу?"
        action={() => onDeleteTask(props.boardId, props.columnId, props.taskId)}
      />
    </div>
  );
};
