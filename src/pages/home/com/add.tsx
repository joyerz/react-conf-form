import * as React from 'react'
import Form from '@Form/index'
// import * as Form from '../../../../index.js'
import 'antd/dist/antd.less'

import FieldsConf from './addConf'
// import ExtendFields from '@conf/extendField'

interface Props {
  actionSubmit: (data: any) => void
}

export default class Add extends React.PureComponent<Props, any> {
  state = {
    data: {
      mobile: '123',
      cascader: ['1', '1.1', '1.1.1'],
    },
  }

  // onChange = (data: any) => {
  //   this.setState({ data })
  // }

  onSubmit = (data: any) => {
    console.log(data)
    this.props.actionSubmit(data)
  }

  onReset = () => {
    this.setState({ data: {} })
  }

  render() {
    return (
      <Form
        dataSource={this.state.data}
        labelDirection="horizontal"
        labelWidth={80}
        fields={FieldsConf()}
        // extendFields={ExtendFields}
        onSubmit={this.onSubmit}
        onReset={this.onReset}
      />
    )
  }
}
