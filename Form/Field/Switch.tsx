import * as React from 'react'
import { Switch } from 'antd'
import { FieldComponentProps } from '@Form/index.d'

export default class extends React.Component<FieldComponentProps> {
  onChange = (checked: boolean) => {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, checked)
    }
    if (this.props.props.onClick) {
      this.props.props.onClick(this.props.data)
    }
  }

  render() {
    const {
      value,
    } = this.props

    const { onClick, ...rest } = this.props.props

    return (
      <>
        <Switch
          {...rest}
          checked={value}
          onChange={this.onChange}
        />
      </>
    )
  }
}
