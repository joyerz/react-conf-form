import React from 'react';
import { DatePicker } from 'antd';
import { getDateTimeStamp, getDateMoment } from '../../utils/date';

export default function DatePickerField(props: RJForm.IProps): JSX.Element {
  const {
    onFieldChange, name, value, fieldProps,
  } = props;

  const onChangeThis = (...args) => {
    const newValue = getDateTimeStamp(args[0]);

    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(...args);
    }

    // form的onChange
    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return (
    <DatePicker
      {...fieldProps}
      onChange={onChangeThis}
      value={getDateMoment(value)}
    />
  );
}
