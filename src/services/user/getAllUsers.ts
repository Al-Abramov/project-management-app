import axios from 'axios';
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
