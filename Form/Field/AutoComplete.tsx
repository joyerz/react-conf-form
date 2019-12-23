import * as React from 'react'
import { AutoComplete } from 'antd'

interface Props {
  name: string
  onChange: (name: string, value: any) => void
  props: {
    dataSource: any,
    [name: string]: any
  }
}

export default function (props: Props) {
  const onChange = (value: any) => {
    if (props.props.onChange) {
      props.props.onChange(props.name, value)
    }
    if (props.onChange) {
      props.onChange(props.name, value)
    }
  }

  return (
    <AutoComplete
      {...props.props}
      onChange={onChange}
    />
  )
}
