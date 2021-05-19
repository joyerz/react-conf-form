// declare enum Type {
//   input = 'input',
//   select = 'select',
//   dropdown = 'dropdown',
//   textarea = 'textarea',
//   password = 'password',
//   number = 'number'
// }

declare type Type = 'input' | 'select' | 'dropdown' | 'textarea' | 'password' | 'number';

declare namespace RJForm {

  interface FormProps {
    gutter?: number;
    span?: number;
    schema: Schema; // 配置数据
    onChange?: <T>(key: string, value: T, oldValue: T) => void;
    onSubmit?: <T>(value: T) => void;
    extendRules?: Rules[],
    extendFields?: any[],
  }

  type Schema = Row[];

  type Row = ItemSchema[];

  interface ItemSchema {
    span?: number;
    label?: string;
    name?: string;
    type: Type;
    fieldProps: FieldProps;
  }

  // 校验规则
  interface Rules {
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    length?: number;
    max?: number;
    min?: number;
    integer?: boolean;
    message: string;
    reg?: RegExp;
    [name:string]: any;
  }

  interface FieldItem {
    label: string;
    key: string;
    type: Type;
    span?: number;
    fieldProps: FieldProps;
  }

  // 控件原来的Props
  interface FieldProps {
    [name: string]: any;
  }

  // 混合Props
  interface IProps {
    onChange: <T>(key: string, newValue: T, T) => void;
    key: string;
    value: any;
    fieldProps: FieldProps;
  }
}

// tslint:disable-next-line:export-just-namespace
export = RJForm;
export as namespace RJForm;

