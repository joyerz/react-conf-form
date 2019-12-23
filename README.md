# Configurable Form for react

> make form by configurable file, validate automatically and init/pick up values by only one method. Extensible for fields, validators

## install
```
yarn add react-conf-form 
or 
npm install react-conf-form
```

## use
```javascript
import Form from 'react-conf-form'
import 'react-conf-form/dist/index.css' // import once

...
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
```

### Props

| key              | Type                       | default value | description             |
| ---------------- | -------------------------- | ------------- | ----------------------- |
| spinning         | boolean                    | false         |                         |
| validateOnChange | boolean                    | true          |                         |
| labelDirection   | 'vertical' \| 'horizontal' | vertical      |                         |
| labelWidth       | number                     | 120           |                         |
| fields           | Array<...>                 | -             | fields                  |
| dataSource       | Object                     | -             | data mapping the fields |
| onSubmit         | (data) => void             | -             |                         |
| onChange         | (key, value) => void       | -             | on any field change     |
| onReset          | () => void                 | -             |                         |
| extendFields     | Array<ExtendField>         | -             |                         |
| extendValidators | Array<ExtendValidator>     | -             |                         |



## config

###Row config

| key        | type                    | default value | description              |
| ---------- | ----------------------- | ------------- | ------------------------ |
| span?      | number                  | 8             | total 24, 8 for each col |
| gutter?    | number                  | 16(px)        | space between ecah col   |
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



### Col config(fields: [...])

| key        | type                                      | default value | description                          |
| ---------- | ----------------------------------------- | ------------- | ------------------------------------ |
| key        | string(unique)                            | -             | the key for field & data             |
| span?      | number(1~24)                              | parent's      | width                                |
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

