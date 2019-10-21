import * as React from 'react'
import Form from '@Form/index'
import FieldsConf from './addConf'
// import ExtendFields from '@conf/extendField'

interface Props {
  actionSubmit: (data: any) => void
}

export default class Add extends React.PureComponent<Props, any> {
  onSubmit = (data: any) => {
    this.props.actionSubmit(data)
  }

  render() {
    return (
      <Form
        labelDirection="vertical"
        labelWidth={80}
        fields={FieldsConf()}
        // extendFields={ExtendFields}
        onSubmit={this.onSubmit}
      />
    )
  }
}
