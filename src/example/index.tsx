import React from 'react';
import ReactDOM from 'react-dom';

import 'moment/locale/zh-cn';
// import { Form, extendFields, extendRules } from '../umd/index';
import { Form, extendFields, extendRules } from '../Form/index';
import 'antd/dist/antd.css';

import getSchema from './conf';
import customFields from './customField';
import customRules from './customRule';
import submitter from './submitter';

import { ConfigProvider } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

extendFields(customFields);
extendRules(customRules);

const data = {
  checkbox: true,
  checkboxGroup: ['12'],
  datepicker: 1621826961836,
};

const onReset = () => {
  console.log('onReset')
}
const onSubmit = (data: any) => {
  console.log('onSubmit', data)
}

const onChange = (...args) => {
  console.log('change', ...args)
}


const root: HTMLElement = document.getElementById('app');
ReactDOM.render(
  <div style={{ padding: '24px' }}>
    <ConfigProvider locale={locale}>
      <Form 
      schema={getSchema()} 
      data={data} submitter={submitter} onChange={onChange} onReset={onReset} onSubmit={onSubmit} />
    </ConfigProvider>
  </div>,
  root,
);
