import React from 'react';
import { AutoComplete } from 'antd';

export default function InputField(props: RJForm.IProps): JSX.Element {
  const {
    onFieldChange, name, value, fieldProps,
  } = props;

  if (!fieldProps?.filterOption) {
    fieldProps.filterOption = (inputValue, option) =>
      inputValue && option.value.indexOf(inputValue) !== -1;
  }

  const onChangeThis = (...args) => {
    const newValue = args[0];

    // 组件原来的onChange事件
    if (fieldProps.onChange) {
      fieldProps.onChange(...args);
    }

    // form的onChange
    if (onFieldChange) {
      onFieldChange(name, newValue, value);
    }
  };

  return <AutoComplete {...fieldProps} onChange={onChangeThis} />;
}
