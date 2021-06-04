import React from 'react';
import { Row, Spin } from 'antd';

import { randomString } from './utils/string';
import { simpleClone } from './utils/object';
import { addLabelStyleWidth, removeLabelStyleWidth } from './utils/style';
import FormCol from './FormCol';
import { validate } from './rules';
import Footer from './Footer';

export { extendFields } from './fields';
export { extendRules } from './rules';

export { generateFileObjectByUrl } from './fields/Upload/hepler';

const { useEffect, useState, useImperativeHandle, forwardRef } = React;

const formID = `FORM_${randomString()}`;

function JForm(props: RJForm.FormProps, ref): JSX.Element {
  const {
    gutter = 24,
    span = 12,
    labelDirection = 'horizontal',
    labelWidth = 120,
    validateOnChange = true,
    schema,
    onChange,
    onSubmit,
    onReset,
    data = {},
    submitter,
    spinning = false,
  } = props;

  const [formData, setFormData] = useState(data);
  const [validation, setValidation] = useState([]);

  // 添加样式
  useEffect(() => {
    addLabelStyleWidth(labelWidth, labelDirection, formID);
    return () => {
      removeLabelStyleWidth(formID);
    };
  }, [labelDirection, labelWidth]);

  // data变化
  useEffect(() => {
    setFormData(data);
  }, [data]);

  // 初始化数据
  useEffect(() => {
    const result = [];
    schema.forEach((row) => {
      row.forEach((item) => {
        if (item.name) {
          result.push({
            state: true,
            message: '',
            name: item.name,
            type: item.type,
            rules: item.rules,
          });
          formData[item.name] = formData[item.name] || undefined;
        }
      });
    });
    // console.log('init:', result, formData);
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
    Object.keys(formData).forEach((key) => {
      const validateItem = validation.find((v) => v.name === key);
      // console.log(key, validateItem);
      validateField(key, formData[key], validateItem?.type);
    });
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
  const validateField = (name: string, value: any, type?: string): void => {
    const validationItem = validation.find((item) => item.name === name);
    if (validationItem && validationItem.rules) {
      let validatedValue = value;

      // 上传图片需要过滤掉status不等于"done"的
      if (type === 'upload') {
        validatedValue = (value || []).filter((item) => item.status === 'done');
        console.log('upload validate', value, validatedValue);
      }

      const result = validate(name, validatedValue, validationItem.rules);
      validationItem.message = result.message;
      validationItem.state = result.state;

      console.log(`validated ${name}`, result);
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
    console.log('change:', name, value, oldValue);
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

  // if(ref){
    useImperativeHandle(ref, () => ({
      callSubmit: () => onFormSubmit(),
      callValidate: () => isAllValidated(),
      getData: () => formData,
    }));
  // }

  const onFormSubmit = (e?): { [name: string]: any } | null => {
    e && e.stopPropagation();
    // 提交前校验
    if (!isAllValidated()) return;
    console.log('on submit', formData);
    onSubmit && onSubmit(formData);
  };

  /**
   * 键盘按下Enter，只要不是textarea类型，提交
   * @param type
   * @returns
   */
  const onKeyPress =
    (type: string) =>
    (e): void => {
      if (type !== 'textarea' && e.charCode === 13) {
        onFormSubmit();
      }
    };

  // const onFormReset = () => {
  //   console.log('reset');
  //   const newValue = {};
  //   Object.keys(formData).forEach((key) => {
  //     newValue[key] = null;
  //   });
  //   setFormData(newValue);
  //   onReset && onReset();
  // };

  // console.log('formData: ', formData);
  return (
    <Spin spinning={spinning}>
      <form id={formID} onSubmit={onFormSubmit}>
        {schema.map((row, idx) => {
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

        {submitter && (
          <Footer {...submitter} onReset={onReset} onSubmit={onFormSubmit} />
        )}
      </form>
    </Spin>
  );
}


export const Form = forwardRef(JForm);
 