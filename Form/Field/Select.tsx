import * as React from 'react'
import { Select } from 'antd'
// import Select from 'antd/es/select'
// import 'antd/es/select/style'

import { notEmptyValue, getItemLabelByValue } from '@Form/utils/common'
import { FieldComponentProps } from '@Form/index.d'

const { Option } = Select
export default class extends React.PureComponent<FieldComponentProps> {
  onChange = (e: any) => {
    const target = e && e.target
    let value
    if (target instanceof HTMLElement || notEmptyValue(target?.value)) {
      value = target.value
    } else {
      value = e
    }
    const { name } = this.props
    const { beforeChange, onChange } = this.props.props
    if (beforeChange) {
      value = beforeChange(name, value)
    }
    if (onChange) {
      onChange(name, value)
    }

    this.props.onChange(name, value)
  }

  render() {
    const { value, readOnly, props } = this.props
    const {
      items = [],
      placeholder = '请选择',
      showSearch = true,
      optionFilterProp = 'label',
      allowClear = true,
      addon,
      ...rest
    } = props

    return readOnly
      ? getItemLabelByValue(items, value)
      : (
        <>
          <Select
            {...rest}
            placeholder={placeholder}
            value={value}
            optionFilterProp={optionFilterProp}
            showSearch={showSearch}
            allowClear={allowClear}
            onChange={this.onChange}
          >
            {items.map(item => (
              <Option key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </>
      )
  }
}
