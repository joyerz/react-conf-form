import * as React from 'react'
import { Select } from 'antd'
// import Select from 'antd/es/select'
// import 'antd/es/select/style'

import { notEmptyValue, getItemLabelByValue } from '@Form/utils/common'
import { FieldComponentProps } from '@Form/index.d'

const { Option, OptGroup } = Select
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

  renderGroup = (items: any) => {
    const result = []
    Object.keys(items).forEach(key => {
      const children = []
      items[key].forEach(item => {
        children.push(
          <Option key={item.value} title={item.label}>
            {item.label}
          </Option>,
        )
      })
      result.push(
        <OptGroup label={key} key={key}>
          {children}
        </OptGroup>,
      )
    })
    return result
  }

  render() {
    const { value, readOnly, props } = this.props
    const {
      items = [],
      placeholder = '请选择',
      showSearch = true,
      optionFilterProp = 'title',
      allowClear = true,
      addon,
      ...rest
    } = props

    const { mode } = rest
    return readOnly
      ? <span style={{ }}>{getItemLabelByValue(items, value, mode)}</span>
      : (
        <>
          <Select
            {...rest}
            placeholder={placeholder}
            value={value}
            optionFilterProp={optionFilterProp === 'label' ? 'title' : optionFilterProp}
            showSearch={showSearch}
            allowClear={allowClear}
            onChange={this.onChange}
          >
            { Array.isArray(items) && items.map((item: any) => (
              <Option
                key={item.value}
                title={item.label}
                disabled={item.value === undefined}
              >
                {item.label}
              </Option>
            ))}
            { !Array.isArray(items) && this.renderGroup(items)}
          </Select>
        </>
      )
  }
}
