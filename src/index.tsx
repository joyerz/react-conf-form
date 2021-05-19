import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Form from './Form';
// import './assets/styles/index.less';
import 'antd/dist/antd.css';

import getSchema from './conf';

const root: any = document.getElementById('app');
ReactDOM.render(
  <Form schema={getSchema()} />,
  root,
);

