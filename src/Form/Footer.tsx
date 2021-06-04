import React from 'react';
import { Button, Space } from 'antd';

interface Iprops {
  onReset: () => void;
  onSubmit: () => void;
}
export default function Footer(props: RJForm.Submitter & Iprops): JSX.Element {
  const {
    buttonTexts,
    buttonProps = {},
    render,
    align = 'center',
    direction = 'horizontal',
    padding = '42px 0 24px 0',
    onReset,
    onSubmit,
  } = props;
  const { reset, submit } = buttonTexts || {};
  const config = {
    reset: {
      type: buttonProps?.reset?.type || 'default',
      cb: onReset,
      text: reset,
    },
    submit: {
      type: buttonProps?.submit?.type || 'primary',
      cb: onSubmit,
      text: submit,
    },
  };

  const defaultDom = [];
  Object.keys(buttonTexts).forEach((key) => {
    const {  type, ...restProps} = buttonProps[key] || {};
    const item = buttonTexts[key];
    if (item) {
      defaultDom.push(
        <Button 
          type={config[key].type} 
          key={key} 
          onClick={config[key].cb}
          {...restProps}
        >
          {config[key].text}
        </Button>,
      );
    }
  });

  return (
    <div style={{ padding, textAlign: align }}>
      <Space align={align} direction={direction}>
        {render ? render(props, defaultDom) : defaultDom}
      </Space>
    </div>
  );
}
