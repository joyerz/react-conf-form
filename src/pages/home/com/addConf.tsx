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
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
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
          className: 'danger',
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
      {
        key: 'phone',
        label: '',
        type: 'render',
        render: (): any => <div>Render</div>,
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
          type: 'primary',
          onClick: (data: any) => console.log(data),
        },
      },
      {
        key: 'city',
        label: '车是',
        type: 'select',
        props: {
          rules: ['required'],
          items: [
            { label: '北京', value: 'beijing' },
            { label: '天津', value: 'tianjin' },
          ],
          placeholder: '请选择',
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
      {
        key: 'time',
        label: '时间',
        type: 'timepicker',
        props: {
          rules: ['required'],
          placeholder: '请选择',
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
    ],
  },
  {
    fields: [
      {
        span: 12,
        key: 'upload',
        label: '时间',
        type: 'upload',
        props: {
          rules: [],
          placeholder: '起终',
          action: '/upload',
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
      {
        span: 12,
        key: 'cascader',
        label: '关联选择',
        type: 'cascader',
        props: {
          rules: ['required'],
          placeholder: '起终',
          options: [
            {
              value: '1',
              label: '1',
              children: [
                {
                  value: '1.1',
                  label: '1.1',
                  children: [
                    {
                      value: '1.1.1',
                      label: '1.1.1',
                    },
                    {
                      value: '1.1.2',
                      label: '1.1.2',
                    },
                  ],
                },
              ],
            },
          ],
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
        readOnly: false,
      },
    ],
  },
  {
    fields: [
      {
        key: 'autoComplete',
        type: 'autoComplete',
        label: '自动填充',
        props: {
          dataSource: ['123', '2234', '5567'],
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
      {
        key: 'inputPassword',
        type: 'inputPassword',
        label: '密码',
        props: {
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
      {
        key: 'inputNumber',
        type: 'inputNumber',
        label: '数字',
        props: {
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
    ],
  },
  {
    fields: [
      {
        key: 'date',
        type: 'datepicker',
        label: '日期',
        props: {
          // dataSource: ['123', '2234', '5567'],
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
      {
        span: 16,
        key: 'rangepicker',
        type: 'rangepicker',
        label: '日期范围',
        props: {
          showTime: true,
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
    ],
  },
  {
    fields: [
      {
        key: 'textarea',
        type: 'textarea',
        label: '输入框',
        props: {
          rows: 5,
          onPressEnter: (value: string) => console.log('enter press', value),
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
      {
        key: 'radio',
        type: 'radio',
        label: '单选',
        props: {
          options: [
            { label: '选项1', value: '选项1' },
            { label: '选项2', value: '选项2' },
          ],
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
      {
        key: 'checkbox',
        type: 'checkbox',
        label: '多选',
        props: {
          checkAllAble: true,
          options: [
            { label: '选项1', value: '选项1' },
            { label: '选项2', value: '选项2' },
          ],
          // onChange: (name: string, value: any) => console.log('// onChange', name, value),
        },
      },
    ],
  },
  {
    type: 'FormButtons',
    align: 'center',
    display: true,
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
