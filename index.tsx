/*
 * @Author: Joyer Z.
 * @Description: 入口文件
 * @Date: 2020-10-20 23:10:27
 * @Last Modified by: Joyer Z.
 * @Last Modified time: 2020-11-28 13:30:33
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { StateMachineProvider } from 'little-state-machine';
import '@/store';
import Routes from '@/routes';

import './assets/styles/index.less';

function render() {
  const container: HTMLElement = document.querySelector('#app');
  ReactDOM.render(<StateMachineProvider><Routes /></StateMachineProvider>, container);
}

render();
