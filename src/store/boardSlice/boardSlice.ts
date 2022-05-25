import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBoardById } from '../../services/boards/board-service';
import { ColumnInterface } from '../../services/columns/interface/columns.interface';

interface BoardInfoInterface {
  id: string;
  title: string;
  description: string;
  columns: ColumnInterface[];
}

interface BoardState {
  id: string | null;
  boardInfo: BoardInfoInterface;
}

const initialState: BoardState = {
  id: null,
  boardInfo: {
    id: '',
    title: '',
    description: '',
    columns: [],
  },
};

export const fetchBoardInfo = createAsyncThunk<
  BoardInfoInterface,
  string,
  { rejectValue: unknown }
>('board/fetchAllColumns', async (boardId, { rejectWithValue }) => {
  try {
    const data = await getBoardById(boardId);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBoardInfo.fulfilled, (state, action) => {
      state.boardInfo = action.payload;
    });
  },
});

export const { setId } = boardSlice.actions;

export default boardSlice.reducer;
