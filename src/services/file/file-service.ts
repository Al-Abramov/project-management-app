import axios from 'axios';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';

export async function uploadFile(taskId: string, img: Blob, token: string) {
  try {
    const response = await axios.post(
      baseURL + constURL.FILE,
      { taskId: taskId, file: img },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function downloadFile(taskId: string, fileName: string, token: string) {
  try {
    const response = await axios.get(`${baseURL}${constURL.FILE}/${taskId}/${fileName}`, {
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
