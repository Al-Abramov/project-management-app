import axios from 'axios';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';
import { ColumnInterface } from './interface/columns.interface';

export async function getAllColumns(id: string, token: string) {
  const columnUrl = `${baseURL}${constURL.BOARDS}/${id}/${constURL.COLUMNS}`;
  try {
    const response = await axios.get(columnUrl, {
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

export async function createColumns(id: string, obj: ColumnInterface, token: string) {
  const columnsURL = `${baseURL}${constURL.BOARDS}/${id}/${constURL.COLUMNS}`;
  try {
    const response = await axios.post(columnsURL, obj, {
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

export async function getColumnById(idBoard: string, idColumn: string, token: string) {
  const columnUrl = `${baseURL}${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}`;
  try {
    const response = await axios.get(columnUrl + `/${idColumn}`, {
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

export async function deleteColumn(idBoard: string, idColumn: string, token: string) {
  const columnUrl = `${baseURL}${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}`;
  try {
    const response = await axios.delete(columnUrl + `/${idColumn}`, {
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

export async function updateColumn(
  idBoard: string,
  idColumn: string,
  token: string,
  obj: ColumnInterface
) {
  const columnUrl = `${baseURL}${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}`;
  try {
    const response = await axios.put(columnUrl + `/${idColumn}`, obj, {
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
