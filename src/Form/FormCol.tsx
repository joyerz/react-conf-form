import React from 'react';
import { Col, Form } from 'antd';
import DynamicField from './fields';
import { findArrayObject } from './utils/object';

/**
 * 渲染cell item
 * @param item
 * @param globalSpan
 * @returns
 */
const FormCol = (colProps: RJForm.IColProps): JSX.Element => {
  const { item, span, isVertical, value, onFieldChange, onKeyPress, validate } =
    colProps;

  const { label, type, ...rest } = item;

  const lableText = typeof label === 'function' ? label() : label;

  const cols = isVertical
    ? { labelCol: { span: 24 }, wrapperCol: { span: 24 } }
    : {};

  const isRequired = (itemRules: RJForm.Rules[] = []) =>
    !!findArrayObject(itemRules, 'required', true);

  return (
    <Col span={span} onKeyPress={onKeyPress}>
      <Form.Item
        label={lableText}
        key={item.name}
        required={isRequired(item.rules)}
        validateStatus={validate && !validate.state ? 'error' : ''}
        help={validate?.message}
        {...cols}
      >
        {type === 'render' && (typeof rest.render === 'function' ? rest.render() : rest.render )}
        {type !== 'render' && (
          <DynamicField
            {...rest}
            type={type}
            isVertical={isVertical}
            onFieldChange={onFieldChange}
            value={value}
          />
        )}
      </Form.Item>
    </Col>
  );
};

export default FormCol;
