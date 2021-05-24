import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Form, { extendFields, extendRules } from '../Form';
import 'antd/dist/antd.css';

import getSchema from './conf';
import customFields from './customField';
import customRules from './customRule';

extendFields(customFields);
extendRules(customRules);

const data = {
  checkbox: true,
  checkboxGroup: ['12'],
  datepicker: 1621826961836,
};

const root: any = document.getElementById('app');
ReactDOM.render(
  <Form
    schema={getSchema()}
    data={data}
  />,
  root,
);

