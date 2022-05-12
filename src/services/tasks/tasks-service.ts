import axios from 'axios';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';
import { TsaksInterface } from './interface/tasks.interface';

export async function getAllTasks(idBoard: string, idColumn: string, token: string) {
  const tasksUrl = `${baseURL}${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/tasks`;
  try {
    const response = await axios.get(tasksUrl, {
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

export async function createTasks(
  idBoard: string,
  idColumn: string,
  token: string,
  obj: TsaksInterface
) {
  const tasksUrl = `${baseURL}${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/${constURL.TASKS}`;
  try {
    const response = await axios.post(tasksUrl, obj, {
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

export async function getTasksById(
  idBoard: string,
  idColumn: string,
  idTasks: string,
  token: string
) {
  const tasksUrl = `${baseURL}${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/${constURL.TASKS}`;
  try {
    const response = await axios.get(tasksUrl + `/${idTasks}`, {
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

export async function deleteTasks(
  idBoard: string,
  idColumn: string,
  idTasks: string,
  token: string
) {
  const tasksUrl = `${baseURL}${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/${constURL.TASKS}`;
  try {
    const response = await axios.delete(tasksUrl + `/${idTasks}`, {
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

export async function updateTasks(
  idBoard: string,
  idColumn: string,
  idTasks: string,
  token: string,
  obj: TsaksInterface
) {
  const tasksUrl = `${baseURL}${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/${constURL.TASKS}`;
  try {
    const response = await axios.put(tasksUrl + `/${idTasks}`, obj, {
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
