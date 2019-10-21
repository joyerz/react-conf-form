# Configurable Form for react

> make form by configurable file, validate automatically and init/pick up values by only one method. Extensible for fields, validators

### install
```
yarn add react-conf-form 
or 
npm install react-conf-form
```

### use
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
