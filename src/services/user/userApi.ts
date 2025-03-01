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

async function fetch (id: number) {
  try {
    const { data: response } = await api.get(`/user/${id}`);
    return response;
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response) {
        console.error(err);
        throw new Error(err.response.data.message);
      }
      throw new Error(handleAxiosError(err));
    }
    throw new Error('Ocorreu um erro inesperado');
  }
}

async function sendResetToken (email: string) {
  try {
    return await api.post('/user/sendResetToken', { email });
  } catch (err) {
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

async function sendConfirmToken (email: string) {
  try {
    return await api.post('/user/sendConfirmToken', { email });
  } catch (err) {
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

async function confirmToken (token: string, email: string) {
  try {
    const { data: response } = await api.post('/user/confirmToken',
      { token, email }
    );
    return response;
  } catch (err) {
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

async function confirmAccount (id: number, token: string) {
  try {
    const { data: response } = await api.post('/user/confirmAccount',
      { id, token }
    );
    return response;
  } catch (err) {
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

async function resetPassword (userId: number, password: string) {
  try {
    const { data: response } = await api.post('/user/resetPassword', { id: userId, password });
    return response;
  } catch (err) {
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
  fetch,
  sendResetToken,
  sendConfirmToken,
  confirmToken,
  confirmAccount,
  resetPassword,
};