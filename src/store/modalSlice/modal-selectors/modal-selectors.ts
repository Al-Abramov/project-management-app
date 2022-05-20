import { CombinedState } from '@reduxjs/toolkit';
import { ModalState } from '../modalSlice';

export const modalSelector =
  (name: string) => (state: CombinedState<{ modalReducer: ModalState }>) =>
    state.modalReducer[name];
