import { ToastAlert } from 'services/alert.service';
import { NETWORK_ERROR } from 'constants/errors';

export const handleError = (error: Error) => {
  if (error.name === NETWORK_ERROR) {
    ToastAlert.error(error.message);
  } else {
    ToastAlert.error('Something went wrong!');
  }
};
