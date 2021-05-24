import React from 'react';
import { Row, ConfigProvider } from 'antd';

import './styles/index.less';

import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

import { randomString } from './utils/string';
import { simpleClone } from './utils/object';
import { addLabelStyleWidth, removeLabelStyleWidth } from './utils/style';
import FormCol from './FormCol';
import { validate } from './rules';

export { Type } from './const';

export { extendFields } from './fields';

export { extendRules } from './rules';

const { useEffect, useState } = React;

const formID = `FORM_${randomString()}`;

export default function RJForm(props: RJForm.FormProps): JSX.Element {
  const {
    gutter = 24,
    span = 12,
    labelDirection = 'horizontal',
    labelWidth = 120,
    validateOnChange = true,
    schema,
    onChange,
    data = {},
  } = props;

  const [formData, setFormData] = useState(data);
  const [validation, setValidation] = useState([]);

  // 添加样式
  useEffect(() => {
    addLabelStyleWidth(labelWidth, labelDirection, formID);
    return () => removeLabelStyleWidth(formID);
  }, [labelDirection, labelWidth]);

  // 初始化数据
  useEffect(() => {
    const result = [];
    schema.forEach((row) => {
      row.forEach((item) => {
        if (item.name && item.rules) {
          result.push({
            state: true,
            message: '',
            name: item.name,
            rules: item.rules,
          });
          formData[item.name] = formData[item.name] || undefined;
        }
      });
    });
    setValidation(result);
  }, [schema]);

  // 获取validator
  const getValidateByName = (name: string) => {
    const validationItem = validation.find((item) => item.name === name);
    return {
      state: validationItem ? validationItem.state : true,
      message: validationItem?.message || '',
    };
  };

  /**
   * 检查是不是全部通过检验
   * @returns boolean
   */
  const isAllValidated = (): boolean => {
    const notValidatedItemIndex = Object.keys(validation).findIndex(
      (key) => validation[key].validated === false,
    );
    return notValidatedItemIndex === -1;
  };

  /**
   * 校验单个field
   * @param name
   * @param value
   */
  const validateField = (name: string, value: any): void => {
    const validationItem = validation.find((item) => item.name === name);
    if (validationItem) {
      const result = validate(name, value, validationItem.rules);
      validationItem.message = result.message;
      validationItem.state = result.state;

      console.log(`validated${name}`, result);
      setValidation([...validation]);
    }
  };

  /**
   * Form field value is changed
   * @param key
   * @param value
   * @param oldValue
   */
  const onFieldChange = (name: string, value: any, oldValue: any): void => {
    if (validateOnChange) {
      validateField(name, value);
    }
    console.log('form on field change', name, value, oldValue);
    formData[name] = value;
    setFormData(simpleClone(formData));

    if (onChange) {
      onChange(name, value, oldValue);
    }
  };

  /**
   * get value
   * @param key
   * @param oldData
   * @returns
   */
  const getValue = (name?: string) => {
    if (!name) return null;
    const value = formData[name] || undefined;
    return value;
  };

  const isVertical = labelDirection === 'vertical';

  const onFormSubmit = () => {
    // 提交前校验
    if (!isAllValidated()) return false;

    console.log('on submit', formData);
  };

  /**
   * 键盘按下Enter，只要不是textarea类型，提交
   * @param type
   * @returns
   */
  const onKeyPress = (type: string) => (e): void => {
    if (type !== 'textarea' && e.charCode === 13) {
      onFormSubmit();
    }
  };

  return (
    <ConfigProvider locale={locale}>
      <form
        id={formID}
        onSubmit={onFormSubmit}
        action=""
      >
        { schema.map((row, idx) => {
          const rowKey = `row_${idx}`;
          return (
            <Row key={rowKey} gutter={gutter}>
              {row.map((item) => (
                <FormCol
                  key={item.name || randomString()}
                  item={item}
                  span={item.span || span}
                  isVertical={isVertical}
                  value={getValue(item.name)}
                  onFieldChange={onFieldChange}
                  onKeyPress={onKeyPress(item.type)}
                  validate={getValidateByName(item.name)}
                />
              ))}
            </Row>
          );
        })}
      </form>
    </ConfigProvider>
  );
}
