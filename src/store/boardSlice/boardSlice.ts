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
  id: string;
  columnId: string;
  boardInfo: BoardInfoInterface;
  isLoading: boolean;
  error: string;
}

const initialState: BoardState = {
  id: '',
  columnId: '',
  boardInfo: {
    id: '',
    title: '',
    description: '',
    columns: [],
  },
  isLoading: false,
  error: '',
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
    setColumnId(state, action: PayloadAction<string>) {
      state.columnId = action.payload;
    },
    deleteTaskFromState(state, action: PayloadAction<string>) {
      state.boardInfo.columns.filter((column) => column.id === state.columnId)[0].tasks =
        state.boardInfo.columns
          .filter((column) => column.id === state.columnId)[0]
          .tasks?.filter((task) => task.id !== action.payload);
    },
    resetBoardInfo(state) {
      state.boardInfo = initialState.boardInfo;
      state.boardInfo = {
        id: '',
        title: '',
        description: '',
        columns: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBoardInfo.fulfilled, (state, action) => {
        state.boardInfo = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setId, setColumnId, resetBoardInfo, deleteTaskFromState } = boardSlice.actions;

export default boardSlice.reducer;
