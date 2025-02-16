import { api } from '../api';
import { AxiosError } from 'axios';
import { TCreateUserResquest } from './types';
import { handleAxiosError } from '@utils/axiosError';

async function register (userData: TCreateUserResquest) {
  try {
    return await api.post('/user', userData);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.response) {
        console.error(err);
        throw new Error(err.response.data.message);
      }
      throw new Error(handleAxiosError(err));
    }
    throw new Error('Ocorreu um erro inesperado.');
  }
}

export const userApi = {
  register,
};