import React from 'react';
import { Checkbox } from 'antd';

export default function InputField(props: RJForm.IProps): JSX.Element {
  const {
    onFieldChange, name, value, fieldProps,
  } = props;

  const onChangeThis = (...args) => {
    const newValue = args[0].target.checked;

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
    <Checkbox {...fieldProps} onChange={onChangeThis} checked={value}>
      {fieldProps.label}
    </Checkbox>
  );
}
