import { AxiosResponse } from 'axios';
import { message } from 'antd';

const onFulfilled = (response: AxiosResponse): AxiosResponse => {
  const res = response.data;
  // 错误提示
  if (!res.success) {
    message.error(res.msg);
    return;
  }
  return res.result;
};

const onRejected = (error: Error): Promise<Error> => Promise.reject(error);

const req = { onFulfilled, onRejected };

export default req;
