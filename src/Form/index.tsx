import React from 'react';
import { Row, Col } from 'antd';
import DynamicField from './Fields';

const dynamicKeys = (length = 8): string => {
  const stringArray: string[] = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const result = [];
  for (let i = 0; i < length; i++) {
    const index = Math.round(Math.random() * stringArray.length);
    result.push(stringArray[index]);
  }
  return result.join('');
};

export default function Form(props: RJForm.FormProps):JSX.Element {
  const renderItem = (item: RJForm.ItemSchema): JSX.Element => {
    const { span, ...rest } = item;
    return (
      <Col key={item.name || dynamicKeys()} span={span}>
        <DynamicField {...rest} />
      </Col>
    );
  };

  const { gutter = 8, schema } = props;

  return (
    <div>
      { schema.map((row, idx) => {
        const rowKey = `row_${idx}`;
        return (
          <Row key={rowKey} gutter={gutter}>
            {row.map((item) => renderItem(item))}
          </Row>
        );
      })}
    </div>
  );
}
