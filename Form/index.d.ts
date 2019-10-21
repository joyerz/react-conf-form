import * as React from 'react'


export default class Form extends React.Component<RJFormProps> {
}

export interface RJFormProps {
  spinning?: boolean,
  validateOnChange?: boolean, // onchange是否要验证
  fields: Array<FieldsConfT>, // 表单配置
  dataSource: {}, // 数据
  onSubmit?: ActionModifyT, // 提交方法
  onReset?: VoidFuncT, // 重置方法
  onChange?: (name: string, value: string | number, data: {}) => void // onChange
  extendValidators?: Array<ExtendValidator>
  extendFields?: Array<ExtendField>
  labelDirection?: 'vertical' | 'horizontal'
  labelWidth?: number
}

/* fields Conf */
export interface FieldsConfT {
  type?: 'Fields' | 'FormButtons'
  gutter?: number
  span?: number
  align?: 'left' | 'right' | 'center' // for FormButtons
  fields?: Array<FieldItemT | ButtonT>
  props?: {
    rules: Array<string>
    [key: string]: any
  },
  style?: Object,
  className?: string,
}

export interface FieldItemT {
  span?: number
  key: string
  type: string
  label?: string | React.ReactNode
  props?: FieldProps
  render?: (data: Object) => any
  className?: string
  addon?: any
  display?: boolean // display or not
}

type FieldProps = {
  rules?: Array<any>,
  [key: string]: any
}

export interface ButtonT {
  span?: number
  label: string
  key: string
  className?: string
  type?: string
  spaceBetween?: number
  cb?: (data: Object) => any
  display?: boolean
  addon?: (data: Object) => any
}

export type ButtonType = 'default' | 'primary' | 'danger' | 'link' | 'ghost'

export type ActionModifyT = (params?: object) => void

export type VoidFuncT = () => void

// form validation extensions
export interface ValidatorT {
  [name: string]: ValidatorChildT
}

export interface ValidatorChildT {
  validator: (value: any, length?: any) => boolean
  errorMsg: any
}

export interface ExtendValidator extends ValidatorChildT {
  name: string
}

export interface FieldRender {
  name: string
  component: any // React.Component<FieldRenderProps, any>,
}

export interface FieldRenderProps {
  onChange?: (name: string, value: any) => any
}

export interface ExtendField {
  name: string
  component: any //React.Component<FieldRenderProps, any>,
}
