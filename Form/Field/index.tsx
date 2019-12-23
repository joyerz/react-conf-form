import * as React from 'react'
import { FieldItemT, ExtendField } from '../index.d'
import Render from './Render'
import Input from './Input'
import Button from './Button'
import Select from './Select'
import Timepicker from './Timepicker'
import Rangepicker from './Rangepicker'
import Datepicker from './Datepicker'
import CascaderField from './Cascader'
import UploadBox from './Upload'
import AutoComplete from './AutoComplete'
import InputPassword from './InputPassword'
import InputNumber from './InputNumber'
import Textarea from './Textarea'
import Radio from './Radio'
import Checkbox from './Checkbox'

const map = {
  render: Render,
  input: Input,
  button: Button,
  select: Select,
  timepicker: Timepicker,
  rangepicker: Rangepicker,
  datepicker: Datepicker,
  cascader: CascaderField,
  inputPassword: InputPassword,
  inputNumber: InputNumber,
  textarea: Textarea,
  radio: Radio,
  checkbox: Checkbox,
  upload: UploadBox,
  autoComplete: AutoComplete,
}

/* Add extract field */
export const addFields = (extendFields: Array<ExtendField>) => (
  extendFields.forEach((extendField: ExtendField) => {
    const { name, component } = extendField
    map[name] = component
  })
)

/* Field Map */
const getComponent = (type: string) => map[type] || null

/* Field Mapping */
type Props = { data: Object, onChange: any, name?: string, value: any } & FieldItemT

export default (props: Props) => {
  const { type, ...rest } = props
  const Component = getComponent(type)
  return Component
    ? <Component {...rest} />
    : null
}
