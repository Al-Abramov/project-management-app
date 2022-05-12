import axios from 'axios';
import { AccountIntrface } from '../authorization/interface.account';
import baseURL from '../baseURL';
import { constURL } from '../enum.services';
import { ErrorResponse } from '../types.services';

class UserService {
  static async getAllUsers(token: string) {
    try {
      const response = await axios.get(baseURL + constURL.USERS, {
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

  static async getUserById(id: string, token: string) {
    try {
      const response = await axios.get(baseURL + constURL.USERS + id, {
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

  static async updateUser(id: string, token: string, obj: AccountIntrface) {
    try {
      const response = await axios.put(baseURL + constURL.USERS + id, obj, {
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

  static async deleteUser(id: string, token: string) {
    try {
      const response = await axios.delete(baseURL + constURL.USERS + id, {
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
}

export const ClassgetAllUser = (token: string) => UserService.getAllUsers(token);
export const ClassgetUserById = (id: string, token: string) => UserService.getUserById(id, token);
export const ClassupdateUser = (id: string, token: string, obj: AccountIntrface) =>
  UserService.updateUser(id, token, obj);
export const ClassdeleteUser = (id: string, token: string) => UserService.deleteUser(id, token);
