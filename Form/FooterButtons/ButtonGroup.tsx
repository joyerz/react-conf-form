import * as React from 'react'
// import Button from 'antd/es/button'
// import 'antd/es/button/style'
import { Button } from 'antd'
import { ButtonT, FieldItemT, ButtonType } from '../index.d'

type Props = {
  fields?: Array<FieldItemT | ButtonT>
  gutter?: number
  onButtonClick?: (key: string, cb?: Function) => void
  data?: Object,
}

const buttonTypes: Array<ButtonType> = ['default', 'primary', 'danger', 'link', 'ghost']

export default function (props: Props): any {
  const { gutter = 16, fields } = props
  return (
    fields.map((button: ButtonT, idx: number) => {
      const {
        key,
        label = '',
        display = true,
      } = button

      const {
        type = 'default',
        className = '',
        cb,
        addon,
        style = {},
        ...rest
      } = button.props || {}

      let buttonType: any
      const index = buttonTypes.findIndex(item => item === type)
      if (index !== -1) {
        buttonType = buttonTypes[index]
      }

      if (rest.block) {
        style.display = 'block'
        style.width = '100%'
      }

      return display
        ? (
          <span key={key} style={style}>
            {idx > 0 && <span className="react-conf-form-button-space-between" style={{ width: gutter }} />}
            <Button
              type={buttonType}
              className={className}
              {...rest}
              onClick={() => props.onButtonClick(key, cb)}
            >
              {label}
            </Button>

            {addon && addon(props.data)}
          </span>
        )
        : null
    })
  )
}

