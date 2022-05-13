import axios from 'axios';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';
import { BoardInterface } from './interfaces/BoardInterface';

export async function getAllBoards(token: string) {
  try {
    const response = await axios.get(baseURL + constURL.BOARDS, {
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

export async function getBoardById(id: string, token: string) {
  try {
    const response = await axios.get(baseURL + constURL.BOARDS + `/${id}`, {
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

export async function deleteBoard(id: string, token: string) {
  try {
    const response = await axios.delete(baseURL + constURL.BOARDS + `/${id}`, {
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
