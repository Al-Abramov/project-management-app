import axios from 'axios';
import api from '../api';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';
import { BoardInterface } from './interfaces/BoardInterface';

export async function getAllBoards() {
  try {
    const response = await api.get(constURL.BOARDS);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function createBoard(obj: BoardInterface) {
  try {
    const response = await api.post(constURL.BOARDS, obj);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.statusText;
    }
    throw error;
  }
}

export async function getBoardById(boardId: string) {
  try {
    const response = await api.get(constURL.BOARDS + `/${boardId}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).error;
    }
    throw error;
  }
}

export async function deleteBoard(boardId: string) {
  try {
    const response = await api.delete(constURL.BOARDS + `/${boardId}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function updateBoard(boardId: string, obj: BoardInterface) {
  try {
    const response = await api.put(constURL.BOARDS + `/${boardId}`, obj);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.statusText;
    }
    throw error;
  }
}
