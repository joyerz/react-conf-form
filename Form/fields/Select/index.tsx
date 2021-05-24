import React from 'react';
import { Select } from 'antd';

export default function InputField(props: RJForm.IProps): JSX.Element {
  const {
    onFieldChange, name, value, fieldProps,
  } = props;

  const onChangeThis = (newValue) => {
    // const newValue = args[0].target.value;

    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(newValue);
    }

    // form的onChange
    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return <Select {...fieldProps} onChange={onChangeThis} />;
}
