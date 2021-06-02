import moment from 'moment';
import React from 'react';

declare type Type =
  | 'input'
  | 'textarea'
  | 'password'
  | 'number'
  | 'search'
  | 'select'
  | 'swtich'
  | 'switch'
  | 'autoComplete'
  | 'checkbox'
  | 'checkboxGroup'
  | 'datePicker'
  | 'rangePicker'
  | 'radio'
  | 'render'
  | string;

declare namespace RJForm {
  const Form: React.FC<FormProps>;

  type DateType = moment.Moment | null;
  interface Layout {
    gutter?: number;
    span?: number;
  }
  interface FormProps {
    span?: number;
    gutter?: number;
    labelDirection?: 'vertical' | 'horizontal';
    labelWidth?: number;
    schema: Schema; // 配置数据
    data?: { [name: string]: any }; // 默认数据
    validateOnChange?: boolean; // 是不是o的时候校验
    onChange?: <T>(name: string, value: T, oldValue: T) => void;
    onSubmit?: <T>(value: T) => void;
    onReset?: () => void;
    extendRules?: Rules[];
    extendFields?: any[];
    submitter?: Submitter;
    spining?: boolean;
  }

  interface Submitter {
    buttonTexts?: {
      submit: string | boolean;
      reset: string | boolean;
    };
    align?: 'start' | 'center' | 'end';
    padding?: string;
    direction?: 'horizontal' | 'vertical';

    render?: (props?, defaultButtons?: JSX.Element[]) => JSX.Element;
  }

  type Schema = Row[];

  type Row = ItemSchema[];

  interface ItemSchema {
    span?: number;
    label?: string | (() => string);
    name?: string;
    type: Type;
    display?: boolean;
    fieldProps?: FieldProps;
    customProps?: CustomProps;
    isVertical?: boolean;
    rules?: Rules[];
    value?: any;
    render?: (() => JSX.Element | null) | JSX.Element;
  }

  interface CustomProps {
    [name: string]: any;
  }

  // 由Form传给field的props
  interface IFieldProps {
    onFieldChange: (name: string, value: any, oldValue: any) => void;
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
    message?: string;
    [name: string]: any;
  }

  interface RuleItem {
    name: string;
    validator: (value: any, ruleValue?: any) => boolean;
    message: string | ((value: any) => string);
  }

  interface ValidatedResult {
    state: boolean;
    message?: string;
  }

  interface IColProps {
    item: RJForm.ItemSchema;
    span: number;
    isVertical: boolean;
    value: any;
    onKeyPress: any;
    onFieldChange: (name: string, value: any, oldValue?: any) => void;
    validate: {
      state: boolean;
      message: string;
    };
  }

  interface FieldItem {
    label: string;
    name: string;
    type: Type;
    span?: number;
    fieldProps: FieldProps;
  }

  // 控件原来的Props
  interface FieldProps {
    [name: string]: any;
  }

  interface FieldRuleItem {
    validator: (value: any, ruleValue: any) => boolean;
    message: string | ((value: any) => string);
    [name: string]: any;
  }

  interface ExtendFieldItem {
    name: string;
    component: React.FC<IProps>;
  }

  // 混合Props
  interface IProps {
    onFieldChange: <T>(name: string, newValue: T, T) => void;
    name: string;
    value: any;
    fieldProps: FieldProps;
    rules?: FieldRuleItem[];
    customProps?: CustomProps;
  }

  function extendFields(fields: RJForm.ExtendFieldItem[]): void;
  function extendRules(rules: RJForm.RuleItem[]): void;

  interface IUploadFile {
    uuid: string;
    name: string;
    status: string;
    url: string;
  }
  function generateFileObjectByUrl(url: string): IUploadFile;
}

// tslint:disable-next-line:export-just-namespace
export = RJForm;
export as namespace RJForm;
