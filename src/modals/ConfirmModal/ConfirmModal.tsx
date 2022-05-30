import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { ModalProps } from '../interfaces/ModalsProps';

interface ConfirmProps {
  title: string;
  action: () => Promise<void>;
}

export const ConfirmModal: React.FC<ConfirmProps & ModalProps> = (props) => {
  const handleClose = () => {
    props.onClose();
  };

  const actions = () => {
    props.action();
    props.onClose();
  };

  return (
    <Dialog
      sx={{
        textAlign: 'center',
      }}
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        sx={{
          fontSize: '22px',
        }}
        id="alert-dialog-title"
      >
        {props.title}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Нет</Button>
        <Button onClick={actions} autoFocus>
          Да
        </Button>
      </DialogActions>
    </Dialog>
  );
};
