import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';

export const ModalCreateBoard = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
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
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '300px' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-textarea"
              label="Заголовок"
              placeholder="Заголовок"
              fullWidth
              multiline
            />
          </div>
          <div>
            <TextField
              id="outlined-textarea"
              label="Описание"
              placeholder="Описание"
              fullWidth
              multiline
            />
          </div>
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Выйти</Button>
          <Button onClick={handleClose}>Создать</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
