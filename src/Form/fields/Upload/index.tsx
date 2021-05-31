import React from 'react';
import { Upload, Spin, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { generateFileObjectByUrl } from './hepler';

const { useState, useEffect } = React;

export default function UploadField(props: RJForm.IProps): JSX.Element {
  const { onFieldChange, name, value, fieldProps, customProps } = props;
  const { maxSize = 2, maxLength = 1 } = customProps;

  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (Array.isArray(value)) {
      const hasStringFile =
        value.findIndex((item) => typeof item === 'string') !== -1;
      if (!hasStringFile) return;

      const defaultFileList = [];
      value.forEach((item) => {
        if (typeof item === 'string') {
          defaultFileList.push(generateFileObjectByUrl(item));
        } else {
          defaultFileList.push(item);
        }
      });
      setFileList(defaultFileList);
    }
  }, [value]);

  /**
   * onChange变化
   * @param files
   */
  const onChangeThis = (files) => {
    const { fileList } = files;
    fileList.forEach((file) => {
      if (!file.url && file.response?.url) {
        file.url = file.response?.url;
      }
    });
    setFileList(fileList);

    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(files);
    }
    // form的onChange
    if (onFieldChange) {
      onFieldChange(name, fileList, value);
    }
  };

  /**
   * 上传进度模拟<假进度>
   */
  let processID = 0;
  const process = (onProgress, percent = 0) => {
    let nextPercent = percent + Math.random() * 10;
    nextPercent = nextPercent > 99 ? 99 : nextPercent;
    onProgress({ percent: nextPercent });
    processID = setTimeout(() => process(onProgress, nextPercent), 300);
  };

  /**
   * 自定义上传方法
   * @param args
   * @returns
   */
  const customRequest = async (args) => {
    if (!fieldProps.customRequest) return;

    const { file, onSuccess, onError, onProgress } = args;

    process(onProgress);
    // onProgress();
    try {
      const fileUrl = await fieldProps.customRequest(file);
      onSuccess({
        url: fileUrl,
      });
      clearTimeout(processID);
    } catch (e) {
      clearTimeout(processID);
      message.error('上传失败', e);
      onError();
    }
  };

  /**
   * 上传前的校
   * @param file
   * @returns
   */
  const beforeUpload = (file) => {
    const isFileSizeExccessLimited = file.size / 1024 / 1024 > maxSize;

    // const fileType = file.type;
    if (isFileSizeExccessLimited) {
      message.error('仅支持：JPEG/PNG/SVG/BVP 格式 2M以内');
      return Upload.LIST_IGNORE;
    }

    return true;
  };

  const { uploadButtonText } = customProps;

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{uploadButtonText}</div>
    </div>
  );

  return (
    <Upload
      {...fieldProps}
      customRequest={customRequest}
      beforeUpload={beforeUpload}
      onChange={onChangeThis}
      fileList={fileList}
    >
      {fileList.length >= maxLength ? null : uploadButton}
    </Upload>
  );
}
