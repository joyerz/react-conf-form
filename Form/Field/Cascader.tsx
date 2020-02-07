import * as React from 'react'
import { Cascader } from 'antd'
// import Cascader from 'antd/es/cascader'
// import 'antd/es/cascader/style'

function getCascaderLabel(originalValue, curOptions, valueIndex, labelArr) {
  let index = valueIndex
  if (originalValue && index < originalValue.length) {
    const temp = curOptions.find(item => item.value === originalValue[valueIndex])
    if (temp) {
      labelArr.push(temp.label)
    }
    if (temp && temp.children) {
      index += 1
      return getCascaderLabel(
        originalValue,
        temp.children,
        valueIndex,
        labelArr,
      )
    }

    return labelArr.join(' / ')
  }

  return labelArr.join(' / ')
}

export default function CascaderField(props: any) {
  const { readOnly, value, name } = props
  const { options, onChange, placeholder = '请选择' } = props.props

  const change = (selectedValue: any, selectedOptions: any) => {
    if (onChange) {
      onChange(name, selectedValue, selectedOptions)
    }
    props.onChange(name, selectedValue)
  }

  const { addon, ...rest } = props.props

  if (!readOnly) {
    return <Cascader {...rest} onChange={change} value={value} placeholder={placeholder} />
  }

  return getCascaderLabel(value, options, 0, [])
}
