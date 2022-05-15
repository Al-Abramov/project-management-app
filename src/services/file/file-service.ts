import axios from 'axios';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';

export async function uploadFile(taskId: string, img: Blob) {
  try {
    /*const response = await axios.post(
      baseURL + constURL.FILE,
      { taskId: taskId, file: img },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      }
    );*/
    const response = await axios.post(constURL.FILE, { taskId, file: img });

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function downloadFile(taskId: string, fileName: string) {
  try {
    const response = await axios.get(`${constURL.FILE}/${taskId}/${fileName}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}
