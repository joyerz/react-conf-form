import * as React from 'react'
import { Button } from 'antd'
// import Button from 'antd/es/button'
// import 'antd/es/button/style'

import { ButtonType } from '../index.d'

type Props = {
  name: string,
  data: any,
  props: {
    className?: string,
    type: ButtonType,
    onClick: (data: Object) => any
  }
  [name: string]: any
}

const buttonTypes: Array<ButtonType> = ['default', 'primary', 'danger', 'link', 'ghost']

export default (props: Props) => {
  const { label, data } = props
  const {
    type = 'default',
    className = '',
    onClick,
    ...rest
  } = props.props

  let buttonType: ButtonType = 'default'
  const index = buttonTypes.findIndex(item => item === type)
  if (index !== -1) {
    buttonType = buttonTypes[index]
  }

  return (
    <Button
      type={buttonType}
      className={`${buttonType} ${className}`}
      onClick={() => onClick(data)}
      {...rest}
    >
      {label}
    </Button>
  )
}
