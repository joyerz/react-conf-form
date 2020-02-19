import * as React from 'react'
import * as moment from 'moment'
import { DatePicker } from 'antd'

import { notEmptyValue, getTargetValue } from '@Form/utils/common'
import { FieldComponentProps } from '@Form/index.d'

export default class extends React.PureComponent<FieldComponentProps> {
  FORMAT = 'YYYY-MM-DD'

  FORMAT_TIME = 'YYYY-MM-DD HH:mm'

  onChange = (e: any) => {
    let value = getTargetValue(e)
    if (notEmptyValue(value)) {
      value = !value ? value : value.valueOf()
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
    const {
      value,
      readOnly,
      props,
    } = this.props
    const { format, addon, ...rest } = props
    const FORMAT = format || (rest.showTime ? this.FORMAT_TIME : this.FORMAT)
    const fieldValue = value ? moment(value) : undefined

    return readOnly
      ? ((fieldValue && fieldValue.format(format)) || null)
      : (
        <>
          <DatePicker
            {...rest}
            format={FORMAT}
            value={fieldValue}
            onChange={this.onChange}
          />
        </>
      )
  }
}
