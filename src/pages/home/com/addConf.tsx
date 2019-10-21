import * as React from 'react'
import { FieldsConfT } from '@Form/index.d'

export default (): Array<FieldsConfT> => [
  {
    gutter: 16,
    fields: [
      {
        key: 'name',
        label: '职务名称',
        type: 'input',
        props: {
          rules: ['required'],
        },
      },
      {
        key: 'mobile',
        label: '手机号',
        type: 'input',
        props: {
          rules: ['required', 'mobile'],
          placeholder: '查看',
          maxLength: 11,
        },
      },
      {
        key: 'phone',
        label: '',
        type: 'render',
        render: (data: Object): any => {
          console.log('render', data)
          return <div>Render</div>
        },
        props: {
          rules: ['required'],
        },
      },
    ],
  },
  {
    fields: [
      {
        key: 'dd',
        type: 'button',
        label: '我就是个按钮',
        props: {
          className: 'danger',
          onClick: (data: Object) => console.log(data),
        },
      },
    ],
  },
  {
    type: 'FormButtons',
    align: 'center',
    fields: [
      {
        key: 'reset',
        label: '重置',
      },
      {
        key: 'submit',
        label: '搜索',
        className: 'primary',
      },
    ],
  },
]
