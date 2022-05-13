import axios from 'axios';
import { AccountIntrface } from '../authorization/interface.account';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';

export async function getAllUsers(token: string) {
  try {
    const response = await axios.get(baseURL + constURL.USERS, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function getUserById(id: string, token: string) {
  try {
    const response = await axios.get(baseURL + constURL.USERS + `/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).error;
    }
    throw error;
  }
}

export async function deleteUser(id: string, token: string) {
  try {
    const response = await axios.delete(baseURL + constURL.USERS + `/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function updateUser(id: string, token: string, obj: AccountIntrface) {
  try {
    const response = await axios.put(baseURL + constURL.USERS + `/${id}`, obj, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.statusText;
    }
    throw error;
  }
}
