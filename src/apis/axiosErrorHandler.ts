import { AxiosError } from 'axios';

const axiosErrorHandler = (error: unknown): void => {
  const { message, response, request } = error as AxiosError;

  if (response) {
    console.error(`Server error: Code ${response.status} - ${response.data}`);
  } else if (request) {
    console.error(
      `No response received from server: ${(error as AxiosError).message}`
    );
  } else {
    console.error(`Error: ${message}`);
  }
};

export default axiosErrorHandler;
