import axios from 'axios';
const baseURL = 'https://blogger-wph-api-production.up.railway.app';

const headers = {
  accept: 'application/json',
};

export const AxiosInstance = () => {
  const instance = axios.create({
    baseURL,
    headers,
  });

  instance.interceptors.response.use(
    (Response) => Response,
    (error) => {
      console.error('API Error', error);
      return Promise.reject(error);
    }
  );
  return instance;
};
