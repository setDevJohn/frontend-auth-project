import { api } from '../api';
import { AxiosError } from 'axios';
import { TLoginResquest } from './types';
import { handleAxiosError } from '@utils/axiosError';

async function login (userData: TLoginResquest) {
  try {
    const { data: response } = await api.post('/auth', userData);
    return response;
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

export const authApi = {
  login,
};