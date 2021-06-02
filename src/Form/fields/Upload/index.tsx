import React from 'react';
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { generateFileObjectByUrl } from './hepler';
import PicPreview from './PicPreview'

const { useState, useEffect } = React;

export default function UploadField(props: RJForm.IProps): JSX.Element {
  const { onFieldChange, name, value, fieldProps, customProps } = props;
  const { maxSize = 2, maxLength = 1, editMode = false } = customProps;

  const [fileList, setFileList] = useState([]);
  const [preview, setPreview] = useState({visible: false, url: ''});
  const [imagesUrls, setImagesUrls] = useState([]);

  useEffect(() => {
    console.log('value', value);
    if (Array.isArray(value)) {
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
    // 转存response.url 到url
    fileList.forEach((file) => {
      if (!file.url && file.response?.url) {
        file.url = file.response?.url;
      }
    });

    if (maxLength === 1 && editMode) {
      fileList.splice(0, fileList.length -1);
    } else {
      setFileList(fileList);
    }

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

  const handlePreview = (file) => {
    setPreview({
      visible: true,
      url: file.url,
    });
    const urls = fileList.filter(item => item.status === 'done' && item.url).map(item => item.url);
    setImagesUrls(urls);
  }
  const handlePreviewCancel = () => {
    setPreview({
      visible: false,
      url: '',
    });
  }

  let showButton = false;
  // 如果文件数小于限制
  if(fileList.length < maxLength) {
    showButton = true
  }
  // 如果文件数等于1并且是编辑模式
  if (!showButton) {
    showButton = fileList.length === 1 && editMode 
  }
  
  return (
    <>
    <Upload
      {...fieldProps}
      customRequest={customRequest}
      beforeUpload={beforeUpload}
      onChange={onChangeThis}
      onPreview={handlePreview}
      fileList={fileList}
    >
      {showButton && uploadButton}
    </Upload>

    {preview.visible && (
      <PicPreview
        url={imagesUrls}
        showList={false}
        onHide={handlePreviewCancel}
        current={preview.url}
      />
    )}
    </>
  );
}
