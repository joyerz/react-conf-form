import React from 'react';
import { Type } from './const';
import { customRequest } from './upload';

export default function getSchema(): RJForm.Schema {
  return [
    [
      {
        type: Type.render,
        span: 24,
        render: () => <div style={{ background: '#f30' }}>title</div>,
      },
    ],
    [
      {
        label: '输入',
        name: 'input',
        type: Type.input,
        span: 12,
        fieldProps: {
          // onChange: (value: string) => console.log('value', value),
        },
        rules: [{ required: true }],
      },
      {
        label: '请输入',
        name: 'input1',
        type: Type.input,
        span: 8,
        fieldProps: {
          // onChange: (value: string) => console.log('value', value),
        },
        rules: [{ requiredTest: true }, { minLength: 3 }],
      },
    ],
    // [
    //   {
    //     label: '搜索',
    //     name: 'search',
    //     type: Type.search,
    //     span: 12,
    //     fieldProps: {
    //       enterButton: '搜索',
    //       onSearch: (...args) => console.log('search', ...args),
    //     },
    //   },
    //   {
    //     label: '文本框',
    //     name: 'textarea',
    //     type: Type.textarea,
    //     span: 12,
    //     fieldProps: {},
    //   },
    // ],
    // [
    //   {
    //     label: '密码',
    //     name: 'password',
    //     type: Type.password,
    //     span: 12,
    //     fieldProps: {},
    //   },
    //   {
    //     label: '数字',
    //     name: 'number',
    //     type: 'number',
    //     span: 12,
    //     fieldProps: {},
    //   },
    // ],
    // [
    //   {
    //     label: '选择',
    //     name: 'select',
    //     type: Type.select,
    //     span: 12,
    //     fieldProps: {
    //       options: [
    //         { label: '1', value: '1' },
    //         { label: '2', value: '2' },
    //       ],
    //     },
    //   },
    //   {
    //     label: '',
    //     name: 'switch',
    //     type: Type.switch,
    //     span: 12,
    //     fieldProps: {},
    //   },
    // ],
    // [
    //   {
    //     label: '',
    //     name: 'autoComplete',
    //     type: Type.autoComplete,
    //     span: 12,
    //     fieldProps: {
    //       options: [
    //         { label: '12', value: '12' },
    //         { label: '2', value: '2' },
    //       ],
    //     },
    //   },
    //   {
    //     label: '',
    //     name: 'checkbox',
    //     type: Type.checkbox,
    //     span: 12,
    //     fieldProps: {
    //       label: '选择',
    //     },
    //   },
    // ],
    // [
    //   {
    //     label: '',
    //     name: 'checkboxGroup',
    //     type: Type.checkboxGroup,
    //     span: 12,
    //     fieldProps: {
    //       options: [
    //         { label: '12', value: '12' },
    //         { label: '2', value: '2' },
    //       ],
    //     },
    //   },
    //   {
    //     label: '选择',
    //     name: 'datepicker',
    //     type: Type.datePicker,
    //     span: 12,
    //     fieldProps: {
    //       showTime: true,
    //       label: '选择',
    //     },
    //   },
    // ],
    // [
    //   {
    //     label: '',
    //     name: 'rangePicker',
    //     type: Type.rangePicker,
    //     span: 12,
    //     fieldProps: {
    //       options: [
    //         { label: '12', value: '12' },
    //         { label: '2', value: '2' },
    //       ],
    //     },
    //   },
    //   {
    //     label: '',
    //     name: 'timePicker',
    //     type: Type.timePicker,
    //     span: 12,
    //     fieldProps: {
    //       format: 'HH/mm/ss',
    //       placeholder: '选择',
    //     },
    //   },
    // ],
    // [
    //   {
    //     label: '选择',
    //     name: 'radio',
    //     type: Type.radio,
    //     span: 12,
    //     fieldProps: {
    //       label: '选项1',
    //     },
    //   },
    //   {
    //     label: '',
    //     name: 'radioGroup',
    //     type: Type.radioGroup,
    //     span: 12,
    //     fieldProps: {
    //       options: [
    //         { label: '12', value: '12' },
    //         { label: '2', value: '2' },
    //       ],
    //     },
    //   },
    // ],
    // [
    //   {
    //     label: '',
    //     name: 'radioGroup',
    //     type: 'customComponent',
    //     span: 12,
    //     fieldProps: {},
    //   },
    //   {
    //     label: '上传',
    //     name: 'image',
    //     type: 'upload',
    //     span: 12,
    //     fieldProps: {
    //       listType: 'picture-card',
    //       customRequest: customRequest,
    //     },
    //     customProps: {
    //       blobName: 'file',
    //       uploadButtonText: '上传',
    //     },
    //     rules: [{ required: true }],
    //   },
    // ],
  ];
}
