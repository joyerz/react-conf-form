import React from 'react';
import { Row, Col } from 'antd';
import DynamicField from './Fields';

export default function Form(props: RJForm.FormProps):JSX.Element {
  const renderItem = (item: RJForm.ItemSchema): JSX.Element => {
    const { span, ...rest } = item;
    return (
      <Col key={item.key}><DynamicField {...rest} /></Col>
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
