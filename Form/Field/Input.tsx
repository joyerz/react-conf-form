import * as React from 'react'
import { Input } from 'antd'
import { notEmptyValue } from '@Form/utils/common'

type Props = {
  name: string,
  beforeChange?: (key: string, value: any) => any
  onChange: (key: string, value: any) => any
  props: any
  [name: string]: any
}

export default class extends React.PureComponent<Props> {
  componentDidMount(): void {
    console.log(this.props)
  }

  onChange = (e: any) => {
    const target = e && e.target
    let value
    if (target instanceof HTMLElement || notEmptyValue(target?.value)) {
      value = target.value
    } else {
      value = e
    }
    const { beforeChange, onChange, name } = this.props
    if (beforeChange) {
      value = beforeChange(name, value)
    }

    onChange(name, value)
  }

  render(): JSX.Element {
    const { rules, ...rest } = this.props.props
    return (
      <Input
        placeholder="请输入"
        {...rest}
        onChange={this.onChange}
        autoComplete="off"
      />
    )
  }
}
