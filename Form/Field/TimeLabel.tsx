// @flow
import * as React from 'react'
import * as moment from 'moment'

type Props = {
  type: string,
  value: number | string | {} | null,
}

const typeMap = {
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
}

const TimeLabel = (props: Props) => (
  props.value
    ? <span>{moment(props.value).format(typeMap[props.type || 'dateTime'])}</span>
    : null
)

TimeLabel.defaultProps = {
  type: 'date',
}

export default TimeLabel
