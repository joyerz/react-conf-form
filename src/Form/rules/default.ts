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
    validator: (value: string | any[], length?: string) =>
      value && value.length < Number(length),
    message: (length: number) => `长度不小于${length}`,
  },
  {
    name: 'maxLength',
    validator: (value: string | any[], length?: string) =>
      value && value.length <= Number(length),
    message: (length: number) => `长度不大于${length}`,
  },
  {
    name: 'length',
    validator: (value: string | any[], length: string) =>
      value && value.length === Number(length),
    message: (length: number) => `长度必须为${length}`,
  },
];

export default defaultRules;
