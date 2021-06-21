import { notEmptyValue } from '../utils/string';

// 默认的规则
const defaultRules: RJForm.RuleItem[] = [
  {
    name: 'required',
    validator: (value: any) => notEmptyValue(value),
    message: '必填',
  },
  {
    name: 'minLength',
    validator: (value: string | any[], length?: string | number) => {
      if (!notEmptyValue(value)) return true;
      return value.length >= Number(length);
    },
    message: (length: number) => `长度不小于${length}`,
  },
  {
    name: 'maxLength',
    validator: (value: string | any[], length?: string | number) => {
      if (!notEmptyValue(value)) return true;
      return value.length <= Number(length);
    },
    message: (length: number) => `长度不大于${length}`,
  },
  {
    name: 'length',
    validator: (value: string | any[], length: string | number) => {
      if (!notEmptyValue(value)) return true;
      return value.length === Number(length);
    },
    message: (length: number) => `长度必须为${length}`,
  },
  {
    name: 'min',
    validator: (value: any, minValue: number) => {
      if (!notEmptyValue(value)) return true;
      return  parseFloat(value) >= minValue;
    },
    message: (minValue: number) => `必须大于或等于${minValue}`,
  },
  {
    name: 'max',
    validator: (value: any, maxValue: number) => { 
      if (!notEmptyValue(value)) return true;
      return parseFloat(value) <= maxValue;
    },
    message: (maxValue: number) => `必须小于或等于${maxValue}`,
  },
  {
    name: 'more_than',
    validator: (value: any, minValue: number) => {
      if (!notEmptyValue(value)) return true;
      return parseFloat(value) > minValue;
    },
    message: (maxValue: number) => `必须大于${maxValue}`,
  },
  // 小于
   {
    name: 'less_than',
    validator: (value: any, maxValue: number) => {
      if (!notEmptyValue(value)) return true;
      return parseFloat(value) < maxValue;
    },
    message: (maxValue: number) => `必须小于${maxValue}`,
  },
  {
    name: 'mobile',
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      return /^1\d{10}/.test(value);
    },
    message: '请输入正确11位手机号'
  },
  {
    name: 'number',
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      return /\d/.test(value);
    },
    message: '请输入正确11位手机号'
  },
  {
    name: 'int',
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      return  !/\D/.test(value)
    },
    message: '必须为整数'
  },
  {
    name: 'positive_number',
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      return parseFloat(value) > 0
    },
    message: '必须为正数'
  },
  {
    name: 'telephone',
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      return /^0\d{2,3}-\d{7,8}$/.test(value);
    },
    message: '需符合（区号-电话号码）的格式'
  },
  {
    name: 'email',
    // eslint-disable-next-line
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      const reg = /[a-z0-9!#$%&'*+"=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+"=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return reg.test(value)
    },
    message: '请输入正确的邮箱'
  },
  {
    name: 'email_suffix',
    // eslint-disable-next-line
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      const reg = /[a-z0-9!#$%&'*+"=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+"=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return reg.test(value)
    },
    message: '请输入正确的邮箱'
  },
  {
    name: 'password',
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S][^\u4e00-\u9fa5]{6,20}$/.test(value);
    },
    message: '由长度为6～16位的数字、大小字母以及符号组成'
  },
  {
    name: 'id_card',
    validator: (value: string) => {
      if (!notEmptyValue(value)) return true;
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
    },
    message: '身份证号码不符合'
  }
];

export default defaultRules;
