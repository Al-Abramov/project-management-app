import axios from 'axios';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';
import { AccountIntrface } from './interface.account';

export async function createAccount(obj: AccountIntrface) {
  try {
    const response = await axios.post(baseURL + constURL.SIGNUP, obj);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

export async function createToken(obj: AccountIntrface) {
  try {
    const response = await axios.post(baseURL + constURL.SIGNIN, obj);

    return response.data.token;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw (error.response.data as ErrorResponse).message;
    }
    throw error;
  }
}

/*const withAuthorization = async (fetchCallback: Promise) => {
  try {
    const response = await fetchCallback();
    return response;
  } catch (error) {
    if (error.auth) {
      redirectToHomePage();

      throw error;
    }
  }
}*/
