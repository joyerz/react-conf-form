import React from 'react';
import { Input } from 'antd';

export default function InputField(props: RJForm.IProps): JSX.Element {
  const {
    onChange, key, value, fieldProps,
  } = props;

  const onChangeThis = (e) => {
    const newValue = e.target.value;

    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(e);
    }

    // form的onChange
    if (onChange) {
      onChange(key, newValue, value);
    }
  };

  return <Input {...fieldProps} onChange={onChangeThis} />;
}
