import axios from 'axios';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { BoardInterface } from './interfaces/BoardInterface';

export async function createBoard(obj: BoardInterface, token: string) {
  try {
    const response = await axios.post(baseURL + constURL.BOARDS, obj, {
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
