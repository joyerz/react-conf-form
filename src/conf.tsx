// import React from 'react';

enum Type {
  input = 'input',
  select = 'select',
  dropdown = 'dropdown',
  textarea = 'textarea',
  password = 'password',
  number = 'number'
}

export default function getSchema(): RJForm.Schema {
  return [
    [{
      label: '输入',
      name: 'input',
      type: Type.input,
      span: 12,
      fieldProps: {
        onChange: (value: string) => console.log('value', value),
      },
    },
    {
      label: '输入',
      name: 'input1',
      type: Type.input,
      span: 8,
      fieldProps: {
        onChange: (value: string) => console.log('value', value),
      },
    }],
  ];
}
