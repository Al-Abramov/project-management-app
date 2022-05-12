import axios from 'axios';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { BoardInterface } from './interfaces/BoardInterface';

export async function updateBoard(id: string, token: string, obj: BoardInterface) {
  try {
    const response = await axios.put(baseURL + constURL.BOARDS + `/${id}`, obj, {
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
