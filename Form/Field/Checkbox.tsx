import * as React from 'react'
import { getItemLabelByValue, getTargetValue, notEmptyValue } from '@Form/utils/common'
import { Checkbox } from 'antd'

export default function CheckboxField(props: any) {
  const {
    value, readOnly, onChange, name,
  } = props
  const { options = [], checkAllAble = false } = props.props

  // 全选
  const onCheckAllChange = (e: any) => {
    const newValue = []
    if (e.target.checked) {
      options.forEach(item => newValue.push(item.value))
    }
    onChange(name, newValue)

    if (props.props.onChange) {
      props.props.onChange(name, newValue)
    }
  }

  const isCheckedAll = (values?: any[]) => (
    notEmptyValue(values) && values.length === options.length
  )

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
    <>
      {checkAllAble && (
        <Checkbox
          checked={isCheckedAll(value)}
          onChange={onCheckAllChange}
        >
          全选 &nbsp;
        </Checkbox>
      )}
      <Checkbox.Group
        {...props.props}
        value={value}
        onChange={change}
      />
    </>
  )
}
