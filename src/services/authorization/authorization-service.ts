import axios from 'axios';
import api from '../api';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';
import { AccountIntrface } from './interface.account';

export async function createAccount(obj: AccountIntrface) {
  try {
    const response = await api.post(constURL.SIGNUP, obj);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function createToken(obj: AccountIntrface) {
  try {
    const response = await api.post(constURL.SIGNIN, obj);
    return response.data.token;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}
