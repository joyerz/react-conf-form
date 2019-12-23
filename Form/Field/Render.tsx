import * as React from 'react'
import { FieldItemT } from '../index.d'

type Props = FieldItemT & {
  data: Object
  render: (data:Object) => any
}

const Render: React.FC<Props> = props => {
  const { data } = props
  const { render } = props.props
  console.log('render', typeof render, render)
  return typeof render === 'function' ? render(data) : (render || null)
}

export default Render
