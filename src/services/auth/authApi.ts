import { api } from '../api';
import { AxiosError } from 'axios';
import { toastError } from '@utils/toast';
import { TLoginResquest } from './types';

async function login (userData: TLoginResquest) {
  try {
    const result = await api.post('/auth', userData);
    console.log(result.data);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response) throw err.response.data.message;
      throw err;
    }
    toastError('Ocorreu um erro inesperado');
    throw new Error(`Ocorreu um erro inesperado: ${err}`);
  }
}

export const authApi = {
  login,
};