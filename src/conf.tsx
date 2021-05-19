// import React from 'react';

export default function getSchema(): RJForm.Schema {
  return [
    [{
      label: '输入',
      type: RJForm.Type.input,
      span: 12,
      fieldProps: {
        onChange: (value: string) => console.log('value', value),
      },
    }],
  ];
}
