# React Conf Form

> 集成了[antd](https://ant.design/index-cn)的可配置表单，封装了默认的校验规则、数据自动提取



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
```

## 配置 config

### 行配置 Row config

| 参数        | 类型                    | 默认值         | 描述              |
| ---------- | ----------------------- | ------------- | ------------------------ |
| span?      | number                  | 8             | total 24, 8 for each col |
| gutter?    | number                  | 16(px)        | space between each col   |
| type?      | 'FormButtons' \| string | -             |                          |
| style?     | object                  | -             |                          |
| className? | string                  | -             | css class                |
| display?   | string                  | true          | show / hide              |
| fields     | array                   |               | see col config below     |
| align      | center \| left \| right | -             | for 'FormButtons' type   |

```javascript
export default [
  {
    span: 8,
    gutter: 16,
    display: true,
    fields: [...]
  }
]
```



### 列配置 Col config(fields: [...])

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

