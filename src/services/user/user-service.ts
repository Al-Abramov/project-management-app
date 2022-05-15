import axios from 'axios';
import api from '../api';
import { AccountIntrface } from '../authorization/interface.account';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';

export async function getAllUsers() {
  try {
    const response = await api.get(constURL.USERS);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function getUserById(id: string) {
  try {
    const response = await api.get(constURL.USERS + `/${id}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).error;
    }
    throw error;
  }
}

export async function deleteUser(id: string) {
  try {
    const response = await api.delete(constURL.USERS + `/${id}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function updateUser(id: string, obj: AccountIntrface) {
  try {
    const response = await api.put(constURL.USERS + `/${id}`, obj);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.statusText;
    }
    throw error;
  }
}
