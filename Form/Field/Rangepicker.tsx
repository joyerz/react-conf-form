import * as React from 'react'
import * as moment from 'moment'
import { DatePicker } from 'antd'
// import Datepicker from 'antd/es/date-picker'
// import 'antd/es/date-picker/style'

import { notEmptyValue, simpleClone, getTargetValue } from '@Form/utils/common'
import { FieldComponentProps } from '@Form/index.d'

export default class extends React.PureComponent<FieldComponentProps> {
  FORMAT = 'YYYY-MM-DD'

  FORMAT_TIME = 'YYYY-MM-DD HH:mm'

  onChange = (e: any) => {
    const { showTime } = this.props.props

    let value = getTargetValue(e)
    if (notEmptyValue(value[0])) {
      if (!showTime) {
        value = [
          moment(moment(value[0]).format('YYYY-MM-DD 00:00:00')).valueOf(),
          moment(moment(value[1]).format('YYYY-MM-DD 23:59:59')).valueOf(),
        ]
      } else {
        value = [moment(value[0]).valueOf(), moment(value[1]).valueOf()]
      }
    } else {
      value = null
    }

    const { name } = this.props
    const { beforeChange, onChange } = this.props.props
    if (beforeChange) {
      value = beforeChange(name, value)
    }
    if (onChange) {
      onChange(name, value)
    }

    console.log('name', name, value)

    this.props.onChange(name, value)
  }

  staticTime = (value, FORMAT) => {
    if (!value) return moment(value).format(FORMAT)
    return ''
  }

  showTime = (timeValue: any[], FORMAT: string) => {
    if (timeValue[0] && timeValue[1]) {
      return `${this.staticTime(timeValue[0], FORMAT)} ~ ${this.staticTime(timeValue[1], FORMAT)}`
    }
    return null
  }

  render() {
    const { value, readOnly, props } = this.props
    const { format, addon, ...rest } = props
    const FORMAT = format || (rest.showTime ? this.FORMAT_TIME : this.FORMAT)

    let timeValue = [null, null]
    if (value && value.constructor.name === 'Array' && value.length > 0) {
      timeValue = simpleClone(value)
      timeValue[0] = moment(value[0])
      timeValue[1] = moment(value[1])
    }

    return readOnly
      ? this.showTime(timeValue, FORMAT)
      : (
        <>
          <DatePicker.RangePicker
            {...rest}
            format={FORMAT}
            value={timeValue}
            onChange={this.onChange}
          />
        </>
      )
  }
}
