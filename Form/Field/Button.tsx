import * as React from 'react'
import { Button } from 'antd'
import { ButtonType } from '../index.d'

type Props = {
  name: string,
  data: any,
  beforeChange?: (key: string, value: any) => any
  onChange: (key: string, value: any) => any
  props: {
    className: string & ButtonType,
    onClick: (data: Object) => any
  }
  [name: string]: any
}

const buttonTypes: Array<ButtonType> = ['default', 'primary', 'danger', 'link', 'ghost']

export default (props: Props) => {
  const { label, data } = props
  const { onClick, className = 'default', ...rest } = props.props
  let type: ButtonType = 'default'
  const index = buttonTypes.findIndex(item => item === className)
  if (index !== -1) {
    type = buttonTypes[index]
  }

  return (
    <Button
      type={type}
      className={className}
      onClick={() => onClick(data)}
      {...rest}
    >
      {label}
    </Button>
  )
}
