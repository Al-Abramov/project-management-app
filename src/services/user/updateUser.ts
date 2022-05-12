import axios from 'axios';
import { AccountIntrface } from '../authorization/interface.account';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';

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
