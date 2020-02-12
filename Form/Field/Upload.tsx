import * as React from 'react'
import { Upload, Icon, Button } from 'antd'
import axios from 'axios'
import PicPreview from './PicPreview'

/**
 * Upload
 * @type {XML}
 */
const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">上传</div>
  </div>
)
const uploadButtonText = (
  <Button>
    <Icon type="upload" />
    &nbsp;上传
  </Button>
)

type UploadFieldProps = {
  value?: Array<any>,
  name: string,
  readOnly?: boolean,
  onChange: (name: string, value: any[]) => void
  props: {
    blobName: string,
    maxFiles: number,
    maxFileSize: number,
    heightRatio?: number,
    widthRatio?: number,
    headers?: any,
    listType?: 'text' | 'picture' | 'picture-card',
    fileType: string, // 上传文件类型  img / other
    showErrorMessage?: boolean,
    onChange: (...args: any[]) => void,
    onUploaded?: (...args: any[]) => void,
    getResponseData?: (...args: any[]) => void // 获取返回的数据
    action: string,
    addon?: any
    responseHandler: {
      url: (response: any) => string
      name: (response: any) => string
    }
  }
}

type UploadState = {
  previewVisible: boolean,
  previewImage: string
  errorMsg: string,
}

export default class UploadField extends React.PureComponent<UploadFieldProps, UploadState> {
  static defaultProps = {
    // props: {
    //   showErrorMessage: true,
    //   maxFiles: 5, // 最多能上传文件数
    //   maxFileSize: 10, // 最大上传体积
    //   fileType: 'img', // 默认上传图片
    // },
  }

  state = {
    previewVisible: false,
    previewImage: '',
    errorMsg: '',
  }

  onChange = (info: any): void => {
    // console.log('!!!!!!进入 onChange ')
    const { onChange, onUploaded, responseHandler } = this.props.props
    let fileList = [...info.fileList]

    fileList.forEach((file, idx) => {
      if (file.response) {
        if (responseHandler) {
          fileList[idx] = {
            ...fileList[idx],
            url: responseHandler.url(file.response),
            name: responseHandler.name(file.response),
          }
        } else {
          fileList[idx] = {
            ...fileList[idx],
            url: file.response.headers.location,
            name: file.response.filename,
          }
        }
      }
      return file
    })

    if (info.file.status === 'done') {
      if (this.props.props.getResponseData) {
        this.props.props.getResponseData(info.file.response)
      }
      this.setState({ errorMsg: '' })
    } else if (info.file.status === 'error') {
      fileList = []
      this.setState({ errorMsg: info.file?.response?.invoice?.message || '上传错误, 请重试!' })
    } else if (!info.file.status) {
      // 文件超过大小或其它不满足前端限制条件情况
      fileList = fileList.slice(0, fileList.length - 1)
      // this.setState({ errorMsg: '' })
    }
    this.props.onChange(this.props.name, fileList)
    if (onChange) {
      onChange(fileList)
    }
    if (onUploaded) {
      onUploaded(fileList)
    }
  }

  onPreview = (file: any) => {
    this.setState({ previewVisible: true, previewImage: file.url })
  }

  handleCancel = () => {
    this.setState({ previewVisible: false, previewImage: '' })
  }

  customRequest = (
    {
      file,
      onSuccess,
      onError,
      onProgress,
    },
  ) => {
    const { headers, action } = this.props.props
    // console.log(action)
    const formData = new FormData()
    formData.append('file', file)

    axios
      .post(action, formData, {
        onUploadProgress: onProgress,
        headers: headers || {},
      })
      .then(response => {
        this.setState({ errorMsg: '' })
        onSuccess(response)
      }, () => {
        this.setState({ errorMsg: '上传失败!' })
        onError()
      })
    return {
      abort() {
        this.setState({ errorMsg: '上传终止!' })
      },
    }
  }

  beforeUpload(file: any, type: string) {
    // console.log('!!!!!!进入 beforeUpload ')
    const { maxFileSize = 10 } = this.props.props
    // if (heightRatio && widthRatio) { // 验证长宽比例
    //   const { height, width } = await getFileDimension(file)
    //   if (height/width !== heightRatio/widthRatio) {
    //     message.error(`长宽比必须是 ${heightRatio} / ${widthRatio}`)
    //     return false
    //   }
    // }
    // 验证文件大小size
    const fileSizeLarger = file.size / 1024 / 1024 > maxFileSize
    if (fileSizeLarger) {
      this.setState({ errorMsg: `文件体积大小不超过${maxFileSize}M` })
      // message.error(`文件体积大小不超过${maxFileSize}M`)
      return false
    }

    // 验证文件格式
    if (type === 'img') {
      const isJPG = file.type
      if (isJPG === 'image/jpeg' || isJPG === 'image/png') {
        this.setState({ errorMsg: '' })
        return true
      }

      this.setState({ errorMsg: '仅支持上传jpg/png格式图片' })
      // message.error('仅支持上传jpg/png格式图片')
      return false
    }

    this.setState({ errorMsg: '' })
  }

  render() {
    const {
      value = [],
      readOnly,
      props,
    } = this.props

    const {
      maxFiles = 10,
      blobName = 'blob',
      fileType = 'img',
      showErrorMessage = true,
      listType = 'picture-card',
      headers = {},
    } = props
    // value = value || []


    const button = listType === 'picture-card' ? uploadButton : uploadButtonText
    const formatValue = JSON.parse(JSON.stringify(value))
    const imagesUrls = []
    formatValue.forEach(element => {
      imagesUrls.push(element?.url)
    })

    formatValue.forEach((item, idx) => {
      if (typeof item !== 'object') {
        formatValue[idx] = {
          uid: `${item}_${idx}`,
          url: item,
        }
      }

      return item
    })

    const { addon, ...rest } = props

    // console.log('err', this.state.errorMsg, showErrorMessage)
    return (
      <div style={{ position: 'relative' }}>
        <Upload
          {...rest}
          key={blobName}
          name={blobName}
          headers={headers}
          listType={listType}
          fileList={formatValue}
          showUploadList
          onChange={file => this.onChange(file)}
          beforeUpload={file => this.beforeUpload(file, fileType)}
          disabled={readOnly}
          onPreview={this.onPreview}
          customRequest={this.customRequest} /* 覆盖默认的上传行为 */
        >
          {value.length >= maxFiles || readOnly ? null : button}
        </Upload>

        {this.state.errorMsg && showErrorMessage && (
          <div className="upload-error">{this.state.errorMsg}</div>
        )}

        {this.state.previewVisible && (
          <PicPreview
            url={imagesUrls}
            showList={false}
            onHide={this.handleCancel}
            current={this.state.previewImage}
          />
        )}
      </div>
    )
  }
}
