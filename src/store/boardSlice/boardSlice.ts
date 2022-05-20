import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardInterface } from '../../services/boards/interfaces/BoardInterface';

interface BoardState {
  boards: BoardInterface[];
  id: string | null;
}

const initialState: BoardState = {
  boards: [],
  id: null,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    getBoards(state, action: PayloadAction<BoardInterface[]>) {
      state.boards = action.payload;
    },
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

export const { getBoards, setId } = boardSlice.actions;

export default boardSlice.reducer;
