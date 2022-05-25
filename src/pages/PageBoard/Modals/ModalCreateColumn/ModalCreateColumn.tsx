import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import style from './ModalCreateColumn.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hook/hook';
import { ModalProps } from '../../../../modals/interfaces/ModalsProps';
import { CreateColumnForm } from './interfaces/CreateColumnForm';
import { COLUMN_MODAL } from '../../../../modals/constModal';
import { callModal } from '../../../../store/modalSlice/modalSlice';
import { createColumns } from '../../../../services/columns/columns-service';
import { fetchBoardInfo } from '../../../../store/boardSlice/boardSlice';

export const ModalCreateColumn: React.FC<ModalProps> = (props) => {
  const dispatch = useAppDispatch();
  const boardId = useAppSelector((state) => state.boardReducer.id) as string;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<CreateColumnForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<CreateColumnForm> = async (data) => {
    await createColumns(boardId, data);
    dispatch(fetchBoardInfo(boardId));
    dispatch(callModal({ name: COLUMN_MODAL, isOpen: false }));
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
        Создание колонки
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
