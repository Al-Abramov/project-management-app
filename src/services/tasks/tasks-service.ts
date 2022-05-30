import axios from 'axios';
import api from '../api';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';
import { TasksInterface } from './interface/tasks.interface';

export async function getAllTasks(idBoard: string, idColumn: string) {
  const tasksUrl = `${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/tasks`;
  try {
    const response = await api.get(tasksUrl);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function createTasks(idBoard: string, idColumn: string, obj: TasksInterface) {
  const tasksUrl = `${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/${constURL.TASKS}`;
  try {
    const response = await api.post(tasksUrl, obj);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function getTasksById(idBoard: string, idColumn: string, idTasks: string) {
  const tasksUrl = `${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/${constURL.TASKS}`;
  try {
    const response = await api.get(tasksUrl + `/${idTasks}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function deleteTasks(idBoard: string, idColumn: string, idTasks: string) {
  const tasksUrl = `${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/${constURL.TASKS}`;
  try {
    const response = await api.delete(tasksUrl + `/${idTasks}`);

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
  obj: TasksInterface
) {
  const tasksUrl = `${constURL.BOARDS}/${idBoard}/${constURL.COLUMNS}/${idColumn}/${constURL.TASKS}`;
  try {
    const response = await api.put(tasksUrl + `/${idTasks}`, obj);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.statusText;
    }
    throw error;
  }
}
