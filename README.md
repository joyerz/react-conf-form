# React Conf Form

> 集成了[antd](https://ant.design/index-cn)的配置化表单(思路来源于[jsonschema form]( https://github.com/rjsf-team/react-jsonschema-form))
> 不同的是，简化了配置的书写以及数据的提取

> 继承了控件Input, Button, Select, Upload等常用控件，可自定义扩展控件

> 自带校验规则，可扩展校验规则

> 表单数据自动提取



## 安装install

```
yarn add react-conf-form 
or 
npm install react-conf-form
```



## 使用usage

```javascript
import * as React from 'react'
import Form from 'react-conf-form'
import 'react-conf-form/dist/index.css' // import once

export default class FormDemo extends React.Component {
    onSubmit = (data) => { console.log(data) }
    
    render() {
      return (
        <Form
          fields={FIELDS_CONF}
          dataSource={DATA_SOURCE}
          onSubmit={this.onSubmit}
        />
      )
    }
}
```



### 参数 props

| 参数              | 类型                        | 默认值         | 描述             |
| ----------------- | -------------------------- | ------------- | ----------------------- |
| spinning?         | boolean                    | false         | 是否显示加载状态          |
| validateOnChange? | boolean                    | true          | 是否在onChange自动进行校验 |
| labelDirection?   | 'vertical' \| 'horizontal' | horizontal    | label位置                |
| labelWidth?       | number                     | 120           | label的宽度              |
| fields            | Array<...>                 | -             | fields                  |
| dataSource?       | Object                     | -             | 初始值对象（对应fields的key相应的属性值) |
| onSubmit?         | (data) => void             | -             | 提交(data为最新的值)      |
| onChange?         | (key, value, data) => void | -             | 任意表单项修改触发              |
| onReset?          | () => void                 | -             | 重置触发                 |
| extendFields?     | Array<ExtendField>         | -             | 扩展表单控件              |
| extendValidators? | Array<ExtendValidator>     | -             | 扩展校验规则              |

```javascript

onSubmit = (data) => console.log(data)

onChange = (name, value, data) => console.log(name, value, data)

onReset = () => {}

render() {
  const FIELDS = [...]

  return (
    <Form
      spinning={false}
      validateOnChange={true}
      labelDirection="horizontal"
      labelWidth={120}
      fields={FIELDS}
      dataSource={{}}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      onReset={this.onReset}
      extendFields={[]}
      extendValidators={[]}
    />
  )
}
```

## 配置

### 行 Row

| 参数        | 类型                    | 默认值         | 描述              |
| ---------- | ----------------------- | ------------- | ------------------------ |
| span?      | number                  | 8             | 行内单元格所占珊格，最大24   |
| gutter?    | number                  | 16(px)        | 间隔                      |
| type?      | 'FormButtons' \| string | -             | 按钮行 / 常规控件行         |
| style?     | object                  | -             | 自定义样式                 |
| className? | string                  | -             | 自定义样式class           |
| display?   | string                  | true          | 是否显示                  |
| fields     | array                   |               | 单元格配置                |
| align?     | center \| left \| right | -             | 适用于按钮行(FormButtons), 按钮的对齐方式  |

```javascript
const FIELDS = [
  { // row 
    span: 8,
    gutter: 16,
    display: true,
    type: 'fields',
    fields: [...], // field's cols
  }
]
```



### 列 (fields: [field, ...])

| 参数        | 类型                                      | 默认值         | 描述                          |
| ---------- | ----------------------------------------- | ------------- | ------------------------------------ |
| key        | string(唯一)                               | -             | field & data对应的key                |
| span?      | number(1~24)                              | 继承row        | 栅格宽度                              |
| offset?    | number(1~24)                              | 0             | 偏移栅格                              |
| label      | string                                    | -             |                                      |
| type       | string                                    | -             | input, render, timepicker...         |
| display?   | boolean                                   | true          | 是否展示                              |
| readOnly?  | boolean                                   | false         | 是否只读                               |
| className? | string                                    | -             | css class                            |
| **props**  | **object**                                |               | **控件内部的参数**                     |
|            | className?                                | -             | css class                            |
|            | rules: Array<string>                      | []            | rules for validation                 |
|            | onChange?: (name, value) => any           | -             |                                      |
|            | beforeChange?: (name, value) => new value | -             | onChange触发前调用，用于覆盖处理onChange的值 |
|            | onClick?: (data) => any                   |               | 当**type**="**button**"，点击回调      |
|            | render?: string \| Node \| (data) => any  |               | 当**type**="**render**"，render方法/对象   |
|            | addon?: string \| Node \| (data) => any   |               | 额外的render                          |
|            | ...others                                 |               |                                      |

