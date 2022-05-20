import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import style from './ModalCreateButton.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createBoard, getAllBoards } from '../../../services/boards/board-service';
import { CreateBoardForm } from './interfaces/CreateBoardModal.interfaces';
import { useAppDispatch } from '../../../store/hook/hook';
import React from 'react';
import { getBoards } from '../../../store/boardSlice/boardSlice';
import { callModal } from '../../../store/modalSlice/modalSlice';
import { BOARD_MODAL } from '../../../modals/constModal';
import { ModalProps } from '../../../modals/interfaces/ModalsProps';

export const ModalCreateBoard: React.FC<ModalProps> = (props) => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<CreateBoardForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<CreateBoardForm> = async (data) => {
    await createBoard(data);
    const dataBoards = await getAllBoards();
    dispatch(getBoards(dataBoards));
    dispatch(callModal({ name: BOARD_MODAL, isOpen: false }));
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
        Создание доски
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
                marginBottom: '25px',
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
