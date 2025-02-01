import { toast } from 'react-toastify';

const toastSucess = (message: string) => {
  toast.success(message);
};

const toastWarn = (message: string) => {
  toast.warn(message);
};

const toastError = (message: string) => {
  toast.error(message);
};

export { toastSucess, toastWarn, toastError };