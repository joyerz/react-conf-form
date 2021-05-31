import { AxiosRequestConfig } from 'axios';

const onFulfilled = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json;charset=utf-8',
    envtag: 'tower',
  };
  return config;
};

const onRejected = (error: Error): Promise<Error> => Promise.reject(error);

const req = { onFulfilled, onRejected };

export default req;
