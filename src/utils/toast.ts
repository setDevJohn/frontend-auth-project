import { toast } from 'react-toastify';

const toastSuccess = (message: string) => {
  toast.success(message);
};

const toastWarn = (message: string) => {
  toast.warn(message);
};

const toastError = (message: string) => {
  toast.error(message);
};

export { toastSuccess, toastWarn, toastError };