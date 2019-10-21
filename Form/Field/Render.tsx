import * as React from 'react'
import { FieldItemT } from '../index.d'

type Props = FieldItemT & {
  data: Object
  render: (data:Object) => any
}

const Render: React.FC<Props> = props => {
  const { render, data } = props
  return render(data)
}

export default Render
