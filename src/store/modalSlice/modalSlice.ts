import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  [name: string]: boolean;
}

export interface ModalAction {
  name: string;
  isOpen: boolean;
}

const initialState: ModalState = {};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    callModal(state, action: PayloadAction<ModalAction>) {
      const { name, isOpen } = action.payload;
      state[name] = isOpen;
    },
  },
});

export const { callModal } = modalSlice.actions;

export default modalSlice.reducer;
