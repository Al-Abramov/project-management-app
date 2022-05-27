import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import style from './ModalCreateTask.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hook/hook';
import { ModalProps } from '../../../../modals/interfaces/ModalsProps';
import { TASK_MODAL } from '../../../../modals/constModal';
import { callModal } from '../../../../store/modalSlice/modalSlice';
import { TasksInterface } from '../../../../services/tasks/interface/tasks.interface';
import { createTasks } from '../../../../services/tasks/tasks-service';
import { fetchBoardInfo } from '../../../../store/boardSlice/boardSlice';
import { useParams } from 'react-router-dom';

export interface CreateTaskForm {
  title: string;
  description: string;
}

export const ModalCreateTask: React.FC<ModalProps> = (props) => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const boardId = id as string;
  const columnId = useAppSelector((state) => state.boardReducer.columnId) as string;
  const userId = useAppSelector((state) => state.authReducer.id);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TasksInterface>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<CreateTaskForm> = async (data) => {
    const objCreateTask = { ...data, userId };
    await createTasks(boardId, columnId, objCreateTask);
    dispatch(fetchBoardInfo(boardId));
    dispatch(callModal({ name: TASK_MODAL, isOpen: false }));
    reset();
  };

  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle
        sx={{
          display: 'flex',
          alignSelf: 'center',
          fontSize: '24px',
          fontWeight: '600',
        }}
      >
        Создание задачи
      </DialogTitle>
      <DialogContent>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputWrap}>
            <TextField
              sx={{
                marginBottom: '30px',
              }}
              id="outlined-textarea"
              label="Заголовок"
              placeholder="Заголовок"
              fullWidth
              multiline
              {...register('title', {
                required: 'Required!',
                validate: (value) => value.trim() != '',
              })}
            />
            <div>{errors.title && <p className={style.error}>{errors.title.message}</p>}</div>
          </div>
          <div className={style.inputWrap}>
            <TextField
              sx={{
                marginBottom: '30px',
              }}
              id="outlined-textarea"
              label="Описание"
              placeholder="Описание"
              fullWidth
              multiline
              {...register('description', {
                required: 'Required!',
                validate: (value) => value.trim() != '',
              })}
            />
            <div>{errors.title && <p className={style.error}>{errors.title.message}</p>}</div>
          </div>
          <DialogActions>
            <Button onClick={props.onClose}>Выйти</Button>
            <Button type="submit" disabled={!isValid}>
              Создать
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
