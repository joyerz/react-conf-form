import * as React from 'react'
import * as moment from 'moment'
import { TimePicker } from 'antd'
// import Timepicker from 'antd/es/time-picker'
// import 'antd/es/time-picker/style'

import { notEmptyValue, simpleClone, getTargetValue } from '@Form/utils/common'
import { FieldComponentProps } from '@Form/index.d'

export default class extends React.PureComponent<FieldComponentProps> {
  FORMAT = 'HH:mm'

  onChange = (e: any) => {
    const { format = this.FORMAT } = this.props.props

    let value = getTargetValue(e)
    if (notEmptyValue(value)) {
      value = moment(value).format(format)
    }

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

  render() {
    const { value, readOnly, props } = this.props
    const { format = this.FORMAT, ...rest } = props

    const timeValue = notEmptyValue(value)
      ? moment(simpleClone(value), format)
      : undefined

    return readOnly
      ? moment(value).format(format)
      : (
        <>
          <TimePicker
            value={timeValue}
            {...rest}
            format={format}
            onChange={this.onChange}
          />
        </>
      )
  }
}
