import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import style from './ColumnHeader.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateColumn } from '../../../../services/columns/columns-service';

interface ColumnHeaderProps {
  handleTitleClick: () => void;
  changeTitle: (newTitle: string) => void;
  value: string;
  boardId: string;
  columnId: string;
  order: number;
}

interface ColumnHeaderInput {
  title: string;
}

export const ColumnHeader: React.FC<ColumnHeaderProps> = (props) => {
  const {
    register,
    formState: {},
    handleSubmit,
  } = useForm<ColumnHeaderInput>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ColumnHeaderInput> = (data) => {
    const updateObj = { ...data, order: props.order };
    updateColumn(props.boardId, props.columnId, updateObj);
    props.changeTitle(data.title);
    props.handleTitleClick();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.columnBtnContainer}>
        <IconButton
          sx={{ marginRight: '5px' }}
          className={style.columnBtn}
          color="success"
          aria-label="delete"
          type="submit"
        >
          <DoneIcon />
        </IconButton>
        <IconButton className={style.columnBtn} onClick={props.handleTitleClick}>
          <ClearIcon />
        </IconButton>
      </div>
      <input
        className={style.input}
        type="text"
        defaultValue={props.value}
        {...register('title', {
          required: 'Required!',
          validate: (value) => value.trim() != '',
        })}
      />
    </form>
  );
};
