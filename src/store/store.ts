import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';
import modalReducer from './modalSlice/modalSlice';
import boardReducer from './boardSlice/boardSlice';

const rootReducer = combineReducers({ authReducer, modalReducer, boardReducer });

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
