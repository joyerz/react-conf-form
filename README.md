# React Conf Form

> 集成了[antd](https://ant.design/index-cn)的可配置表单

> 继承了控件Input, Button, Select, Upload等常用控件
> 可扩展控件
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



### 参数 Props

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
      dataSource={dataSource}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      onReset={this.onReset}
      extendFields={[]}
      extendValidators={[]}
    />
  )
}
```

## 配置 config

### 行配置 Row

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



### 列配置 (fields: [field, ...])

| key        | type                                      | default value | description                          |
| ---------- | ----------------------------------------- | ------------- | ------------------------------------ |
| key        | string(unique)                            | -             | the key for field & data             |
| span?      | number(1~24)                              | parent's      | width                                |
| offset?    | number(1~24)                              | 0             | offset                               |
| label      | string                                    | -             |                                      |
| type       | string                                    | -             | input, render, timepicker...         |
| display?   | boolean                                   | true          | show / hide                          |
| readOnly?  | boolean                                   | false         | for interative field component       |
| render?    | string \| Node \| data => any             |               | when **type** is "**render**"        |
| addon?     | string \| Node \| data => any             | -             | addon render                         |
| className? | string                                    | -             | css class                            |
| **props**  | **object**                                |               | **for interative field component**   |
|            | className?                                | -             | css class                            |
|            | rules: Array<string>                      | []            | rules for validation                 |
|            | onChange?: (name, value) => any           | -             |                                      |
|            | beforeChange?: (name, value) => new value | -             | will be called before onChange event |
|            | onClick?: (data) => any                   |               | when **type** is "**button**"        |
|            | ...others                                 |               |                                      |

