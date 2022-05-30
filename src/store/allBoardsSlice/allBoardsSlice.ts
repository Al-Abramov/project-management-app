import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllBoards } from '../../services/boards/board-service';
import { BoardInterface } from '../../services/boards/interfaces/BoardInterface';

interface AllBoardsState {
  boards: BoardInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AllBoardsState = {
  boards: [],
  isLoading: false,
  error: null,
};

export const fetchAllBoard = createAsyncThunk<BoardInterface[], undefined, { rejectValue: string }>(
  'board/fetchAllBoard',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllBoards();
      return data;
    } catch (error) {
      return rejectWithValue('Server Error');
    }
  }
);

const allBoardSlice = createSlice({
  name: 'allBoards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBoard.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllBoard.fulfilled, (state, action) => {
        state.boards = action.payload;
        state.isLoading = false;
      });
  },
});

export default allBoardSlice.reducer;
