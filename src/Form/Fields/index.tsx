import React from 'react';
import { Form } from 'antd';

// const InputField = import('./Input');

// FieldMap
const FieldMap = {
  input: React.lazy(() => import('./Input')),
};

export default function DynamicField(props: RJForm.ItemSchema): JSX.Element {
  const {
    type, label, name, fieldProps,
  } = props;

  const Component = FieldMap[type];
  return (
    <Form.Item label={label} key={name} labelCol={{ span: 6 }}>
      <React.Suspense fallback={<div>loading...</div>}>
        <Component {...fieldProps} />
      </React.Suspense>
    </Form.Item>
  );
}
