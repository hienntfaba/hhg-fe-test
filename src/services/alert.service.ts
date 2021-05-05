import { toast, ToastOptions } from 'react-toastify';

/**
 * A wrapper for toast.
 */
class ToastAlertFactory {
  error(message: string, options?: ToastOptions) {
    toast.error(message, options);
  }

  warn(message: string, options?: ToastOptions) {
    toast.warn(message, options);
  }

  info(message: string, options?: ToastOptions) {
    toast.info(message, options);
  }

  success(message: string, options?: ToastOptions) {
    toast.success(message, options);
  }
}

export const ToastAlert = new ToastAlertFactory();
