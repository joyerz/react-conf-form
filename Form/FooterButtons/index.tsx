import * as React from 'react'
import ButtonGroup from './ButtonGroup'
import { FieldsConfT } from '../index.d'

interface Props extends FieldsConfT {
  onButtonClick: (type: string, cb?: Function) => void
}

// const alignMap = {
//   left: 'flex-start',
//   center: 'center',
//   right: 'flex-end',
// }

export default function FooterButtons(props: Props) {
  const {
    style,
    align,
    type,
    ...rest
  } = props
  const wrapperStyle = {
    // justifyContent: alignMap[align || 'center'],
    textAlign: align || 'center',
    ...style,
  }
  return (
    <div
      className="react-conf-form-button-wrapper"
      style={wrapperStyle}
    >
      <ButtonGroup
        {...rest}
      />
    </div>
  )
}

FooterButtons.defaultProps = {
  display: true,
  style: {},
}
