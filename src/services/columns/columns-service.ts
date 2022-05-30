import axios from 'axios';
import api from '../api';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';
import { ColumnInterface } from './interface/columns.interface';

export async function getAllColumns(boardId: string) {
  const columnUrl = `${constURL.BOARDS}/${boardId}/${constURL.COLUMNS}`;
  try {
    const response = await api.get(columnUrl);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function createColumns(boardId: string, obj: ColumnInterface) {
  const columnsURL = `${constURL.BOARDS}/${boardId}/${constURL.COLUMNS}`;

  try {
    const response = await api.post(columnsURL, obj);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function getColumnById(idBoard: string, idColumn: string) {
  const columnUrl = `${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}`;
  try {
    const response = await api.get(columnUrl + `/${idColumn}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function deleteColumn(idBoard: string, idColumn: string) {
  const columnUrl = `${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}`;
  try {
    const response = await api.delete(columnUrl + `/${idColumn}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function updateColumn(idBoard: string, idColumn: string, obj: ColumnInterface) {
  const columnUrl = `${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}`;
  try {
    const response = await api.put(columnUrl + `/${idColumn}`, obj);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.statusText;
    }
    throw error;
  }
}
