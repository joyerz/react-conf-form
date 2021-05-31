import axios, { AxiosInstance } from 'axios';
import req from './req';
import res from './res';

export interface ResData<T> {
  code?: number;
  msg?: string;
  data?: T;
  // eslint-disable-next-line
  [keys: string]: any;
}

const fetch: AxiosInstance = axios.create();

//请求拦截
fetch.interceptors.request.use(req.onFulfilled, req.onRejected);

//响应拦截
fetch.interceptors.response.use(res.onFulfilled, res.onRejected);

export default fetch;
