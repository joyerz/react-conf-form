import { notEmptyValue } from '../Form/utils/string';

const extendRule = [
  {
    name: 'requiredTest',
    validator: (value: any) => notEmptyValue(value),
    message: '必填哦',
  },
];

export default extendRule;
