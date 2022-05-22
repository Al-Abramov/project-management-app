import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllColumns } from '../../services/columns/columns-service';
import { ColumnInterface } from '../../services/columns/interface/columns.interface';

interface BoardState {
  id: string | null;
  columns: ColumnInterface[];
}

const initialState: BoardState = {
  id: null,
  columns: [],
};

export const fetchAllColumns = createAsyncThunk<
  ColumnInterface[],
  string,
  { rejectValue: unknown }
>('board/fetchAllColumns', async (boardId, { rejectWithValue }) => {
  try {
    const data = await getAllColumns(boardId);
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
    builder.addCase(fetchAllColumns.fulfilled, (state, action) => {
      state.columns = action.payload;
    });
  },
});

export const { setId } = boardSlice.actions;

export default boardSlice.reducer;
