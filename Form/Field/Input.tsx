import * as React from 'react'
import { Input } from 'antd'

import { getTargetValue } from '@Form/utils/common'
import { FieldComponentProps } from '@Form/index.d'

export default class extends React.PureComponent<FieldComponentProps> {
  onChange = (e: any) => {
    let value = getTargetValue(e)
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

  staticValue = (value: any, suffix: string, prefix: string) => {
    if (!value) return null

    let string = value
    if (suffix) string = `${value} ${suffix}`
    if (prefix) string = `${prefix} ${string}`

    return string
  }

  render() {
    const {
      value, readOnly, type, props,
    } = this.props
    const {
      addon,
      suffix,
      preffix,
      ...rest
    } = props
    const autoComplete = props.autoComplete || 'off'
    return readOnly
      ? this.staticValue(value, suffix, preffix)
      : (
        <>
          <Input
            placeholder="请输入"
            {...rest}
            type={type}
            value={value}
            onChange={this.onChange}
            autoComplete={autoComplete}
          />
        </>
      )
  }
}
