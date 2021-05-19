import React from 'react';
import { Form } from 'antd';

const InputField = import('./Input');

// FieldMap
const FieldMap = {
  input: InputField,
};

export default function DynamicField(props: RJForm.ItemSchema): JSX.Element {
  const {
    type, label, key, fieldProps,
  } = props;
  const Component = FieldMap[type];

  return <Form.Item label={label} key={key}><Component {...fieldProps} /></Form.Item>;
}
