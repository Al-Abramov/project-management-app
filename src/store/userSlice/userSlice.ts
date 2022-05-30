import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAccount, createToken } from '../../services/authorization/authorization-service';
import { AccountIntrface } from '../../services/authorization/interface.account';
import jwt_decode from 'jwt-decode';

import { deleteUser, getUserById, updateUser } from '../../services/user/user-service';
import { RootState } from '../store';

interface decodeToken {
  userId: string;
  login: string;
}

interface UserState {
  id: string;
  login: string;
  name: string;
}

const token = localStorage.getItem('token');

export const registerUser = createAsyncThunk<UserState, AccountIntrface, { rejectValue: string }>(
  'user/register',
  async (newUser, { rejectWithValue }) => {
    try {
      return await createAccount(newUser);
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);

export const login = createAsyncThunk<UserState, AccountIntrface, { rejectValue: string }>(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const token: string = await createToken(user);
      localStorage.setItem('token', token);
      const { id } = decodeToken(token);
      const dataUser = await getUserById(id);
      return dataUser;
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);

export const updateProfile = createAsyncThunk<UserState, AccountIntrface, { state: RootState }>(
  'user/updateProfile',
  async (data, { getState }) => {
    const id = getState().authReducer.id as string;

    const result = await updateUser(id, data);
    return result;
  }
);

export const getProfile = createAsyncThunk<UserState, void, { state: RootState }>(
  'user/getProfile',
  async (_, { getState }) => {
    const id = getState().authReducer.id as string;
    return getUserById(id);
  }
);

export const deleteProfile = createAsyncThunk<UserState, void, { state: RootState }>(
  'user/deleteProfile',
  async (_, { getState }) => {
    const id = getState().authReducer.id as string;
    return deleteUser(id);
  }
);

const decodeToken = (token: string | null) => {
  if (!token) return { id: '', login: '' };

  const result = jwt_decode<decodeToken>(token);

  return { id: result.userId, login: result.login };
};

const initialState: UserState = {
  name: '',
  ...decodeToken(token),
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token');
      state.id = '';
      state.name = '';
      state.login = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        //const { id, login } = decodeToken(action.payload);
        state.id = action.payload.id;
        state.login = action.payload.login;
        state.name = action.payload.name;
      })

      .addCase(getProfile.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.login = action.payload.login;
        state.name = action.payload.name;
      })

      .addCase(deleteProfile.fulfilled, (state) => {
        localStorage.removeItem('token');

        state.id = '';
        state.login = '';
        state.name = '';
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.login = action.payload.login;
        state.name = action.payload.name;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
