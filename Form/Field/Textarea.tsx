import * as React from 'react'
import { Input } from 'antd'

import { notEmptyValue } from '@Form/utils/common'
import { FieldComponentProps } from '@Form/index.d'

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
    const {
      value, readOnly, props,
    } = this.props
    const autoComplete = props.autoComplete || 'off'
    return readOnly
      ? value
      : (
        <>
          <Input.TextArea
            placeholder="请输入"
            {...props}
            value={value}
            onChange={this.onChange}
            autoComplete={autoComplete}
          />
        </>
      )
  }
}
