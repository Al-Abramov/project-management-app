import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAccount, createToken } from '../../services/authorization/authorization-service';
import { AccountIntrface } from '../../services/authorization/interface.account';
import jwt_decode from 'jwt-decode';
import { boolean } from 'yup';

interface User {
  userId: string | null;
  login: string | null;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;

  message: string | null;
}

const token = localStorage.getItem('token');

export const registerUser = createAsyncThunk<AuthState, AccountIntrface, { rejectValue: string }>(
  'auth/register',
  async (newUser, { rejectWithValue }) => {
    try {
      return await createAccount(newUser);
      /*
      id: "c2557365-f0b8-4f54-aa19-3cfcdfb67c85"
      login: "asd"
      name: "John" 
      */
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);

export const login = createAsyncThunk<string, AccountIntrface, { rejectValue: string }>(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const token = await createToken(user);
      localStorage.setItem('token', token);
      return token;
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  return await localStorage.removeItem('token');
});

const initialState: AuthState = {
  user: token ? jwt_decode(token) : null,

  isLoading: false,

  message: null,
};

const authSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    cleanMessage(state) {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;

        state.message = 'регистрация прошла успешна';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.message = action.payload as string;

        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;

        state.message = 'авторизация прошла успешна';
        const user = jwt_decode(action.payload) as User;
        state.user = user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;

        state.message = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export const { cleanMessage } = authSlice.actions;

export default authSlice.reducer;
