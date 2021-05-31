interface IObjectData {
  [name: string]: any;
}

export const apiPrefix = '/api';
export const uploadPrefix = '/upload';

export function object2query(data: IObjectData): string {
  if (!data) return '';
  let result = '';
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (key && value) {
      result += result ? '&' : '';
      result += `${key}=${value}`;
    }
  });
  return result;
}

export const apiAddress = {
  getUploadToken: (params: IObjectData): string =>
    `${apiPrefix}/file/upload-token?${object2query(params)}`,
  upload: `${uploadPrefix}/file/upload`,
  fileConfirm: (tmp_file_id: string): string =>
    `${apiPrefix}/file/${tmp_file_id}/actions/confirm`,
};
