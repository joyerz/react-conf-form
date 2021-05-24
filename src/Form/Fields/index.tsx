import React from 'react';

import InputField from './Input';
import SearchField from './Search';
import TextareaField from './Textarea';
import PasswordField from './Password';
import NumberField from './Number';
import SelectField from './Select';
import SwitchField from './Switch';
import AutoCompleteField from './AutoComplete';
import CheckboxField from './Checkbox';
import CheckboxGroupField from './CheckboxGroup';
import DatePickerField from './DatePicker';
import RangePickerField from './RangePicker';
import TimePickerField from './TimePicker';
import RadioField from './Radio';
import RadioGroupField from './RadioGroup';

// FieldMap
const FieldMap = {
  input: InputField,
  search: SearchField,
  textarea: TextareaField,
  password: PasswordField,
  number: NumberField,
  select: SelectField,
  switch: SwitchField,
  autoComplete: AutoCompleteField,
  checkbox: CheckboxField,
  checkboxGroup: CheckboxGroupField,
  datePicker: DatePickerField,
  rangePicker: RangePickerField,
  timePicker: TimePickerField,
  radio: RadioField,
  radioGroup: RadioGroupField,
};

export default function DynamicField(props: RJForm.ItemSchema & RJForm.IFieldProps): JSX.Element {
  const {
    type,
    name,
    value,
    fieldProps = {},
    onFieldChange,
  } = props;

  const Component = FieldMap[type];

  return (
    <Component
      name={name}
      value={value}
      fieldProps={fieldProps}
      onFieldChange={onFieldChange}
    />
  );
}

/**
 * 扩展组件库
 * @param fields
 */
export const extendFields = (fields: RJForm.ExtendFieldItem[]): void => {
  fields.forEach((field) => {
    const foundKey = Object.keys(FieldMap).find((key) => key === field.name);
    if (foundKey) {
      throw new Error(`组件${field.name}已存在，请重新定义`);
    }
    FieldMap[field.name] = field.component;
  });
};
