import * as React from 'react'
import { getItemLabelByValue, getTargetValue } from '@Form/utils/common'
import { Radio } from 'antd'

export default function RadioField(props: any) {
  const {
    value,
    readOnly,
    onChange,
    name,
    style = {},
  } = props
  const { options = [] } = props.props

  const change = (target: any) => {
    const newValue = getTargetValue(target)
    onChange(name, newValue)
    if (props.props.onChange) {
      props.props.onChange(name, newValue)
    }
  }

  return readOnly ? (
    getItemLabelByValue(options, value)
  ) : (
    <div style={style}>
      <Radio.Group
        {...props.props}
        value={value}
        onChange={change}
      />
    </div>
  )
}
