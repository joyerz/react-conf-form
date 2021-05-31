import fetch from './base';
import { v4 } from 'uuid';
import { apiAddress } from './base/api';

const getToken = async (): Promise<string> => {
  const res: any = await fetch({
    method: 'get',
    url: apiAddress.getUploadToken({
      subject_id: v4(),
    }),
  });
  return res;
};

const uploadFile = async (file: File, token: string): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  const headers = {
    'Content-Type': 'multipart/form-data',
    file_upload_token: token,
  };
  const res: any = await fetch({
    method: 'post',
    url: apiAddress.upload,
    data: formData,
    headers: headers,
  });
  return res.tmp_file_id;
};

const getFileUrlByTmpFileId = async (tmpFileId: string) => {
  return fetch({
    method: 'post',
    url: apiAddress.fileConfirm(tmpFileId),
  });
};

export const customRequest = async (file: File) => {
  // 获取token
  const token = await getToken();

  // 上传文件获取tmpFileId
  const tmpFileId = await uploadFile(file, token);

  // 用tmpFileId换取url
  const url = await getFileUrlByTmpFileId(tmpFileId);

  return url;
};
