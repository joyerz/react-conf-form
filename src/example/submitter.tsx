import React from 'react';
import { Button } from 'antd';

export default {
  buttonTexts: {
    reset: '重置',
    submit: '保存',
  },
  align: 'end' as const,
  direction: 'horizontal' as const,
  // eslint-disable-next-line
  render: (_, defaultDom): JSX.Element => (
    <>
      {defaultDom}

      <Button type="primary">测试</Button>
    </>
  ),
};
