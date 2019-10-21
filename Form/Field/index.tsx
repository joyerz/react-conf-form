import * as React from 'react'
import { FieldItemT, ExtendField } from '../index.d'
import Render from './Render'
import Input from './Input'
import Button from './Button'

const map = {
  render: Render,
  input: Input,
  button: Button,
}

/* Add extract field */
export const addFields = (extendFields: Array<ExtendField>) => (
  extendFields.forEach((extendField: ExtendField) => {
    const { name, component } = extendField
    map[name] = component
  })
)

/* Field Map */
const getComponent = (type: string) => map[type] || null

/* Field Mapping */
type Props = { data: Object, onChange: any, name?: string, value: any } & FieldItemT

export default (props: Props) => {
  const { type, ...rest } = props
  const Component = getComponent(type)
  return Component
    ? <Component {...rest} />
    : null
}
