import { v4 } from 'uuid';
export interface FileData {
  uid: string;
  name: string;
  status: string;
  url: string;
  // eslint-disable-next-line
  [keys: string]: any;
}
export const generateFileObjectByUrl = (url: string): FileData => {
  const file = {
    uid: v4(),
    // name: url.replace(/(.*\/)*([^.]+)/i, '$2').split('?')[0],
    name: url.replace(/(.*\/)*([^.]+)/i, '$2'),
    status: 'done',
    url: url,
  };
  return file;
};
