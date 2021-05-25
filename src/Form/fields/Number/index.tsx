import React from 'react';
import { InputNumber } from 'antd';

export default function InputField(props: RJForm.IProps): JSX.Element {
  const {
    onFieldChange, name, value, fieldProps,
  } = props;

  const onChangeThis = (newValue) => {
    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(newValue);
    }

    // form的onChange
    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return <InputNumber {...fieldProps} onChange={onChangeThis} />;
}