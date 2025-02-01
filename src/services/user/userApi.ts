import { api } from '../api';
import { AxiosError } from 'axios';
import { toastError } from '@utils/toast';
import { TCreateUserResquest } from './types';

async function register (userData: TCreateUserResquest) {
  try {
    const result = await api.post('/user', userData);
    console.log(result);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response) throw err.response.data.message;
      throw err;
    }
    toastError('Ocorreu um erro inesperado');
    throw new Error(`Ocorreu um erro inesperado: ${err}`);
  }
}

export const userApi = {
  register,
};