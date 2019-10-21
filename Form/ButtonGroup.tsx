import * as React from 'react'
import { Button } from 'antd'
import { ButtonT, ButtonType, FieldItemT } from './index.d'

type Props = {
  fields: Array<FieldItemT | ButtonT>
  gutter: number
  onButtonClick: (key: string, cb?: Function) => void
  data: Object
}

const buttonTypes: Array<ButtonType> = ['default', 'primary', 'danger', 'link', 'ghost']

export default (props: Props): any => (
  props.fields.map((button: ButtonT, idx: number) => {
    const {
      key,
      label = '',
      className = 'default',
      cb,
      display = true,
      addon,
    } = button

    let type: ButtonType = 'default'
    const index = buttonTypes.findIndex(item => item === className)
    if (index !== -1) {
      type = buttonTypes[index]
    }

    return display
      ? (
        <span key={key}>
          {idx > 0 && <span className="react-conf-form-button-space-between" style={{ width: props.gutter }} />}
          <Button
            type={type}
            className={className}
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

