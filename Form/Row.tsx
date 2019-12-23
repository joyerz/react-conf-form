import * as React from 'react'
import { Row, Col, Form } from 'antd'
// import Row from 'antd/es/row'
// import Col from 'antd/es/col'
// import Form from 'antd/es/form'
// import 'antd/es/row/style'
// import 'antd/es/col/style'
// import 'antd/es/form/style'

import { DEFAULT_GUTTER, DEFAULT_SPAN } from '@Form/config'
import ButtonGroup from './FooterButtons/ButtonGroup'
import { FieldsConfT, FieldItemT } from './index.d'
import Field from './Field'

type Props = FieldsConfT & {
  onButtonClick: (type: string, cb?: Function) => void
  onChange: (name: string, value: any) => any
  data: Object
  validation: Object
  labelDirection: string,
}

export default (props: Props): any => {
  const {
    onButtonClick,
    gutter = DEFAULT_GUTTER,
    type,
    align = 'left',
    style = {},
    className = '',
    fields,
    data,
    onChange,
    validation,
    labelDirection,
  } = props

  return (
    <Row gutter={gutter}>
      <div className={`${className} ${labelDirection}`}>
        {/* 按钮组合 */}
        {type === 'FormButtons' && (
          <div
            className="react-conf-form-button-row-wrapper"
            style={Object.assign({ textAlign: align }, style)}
          >
            <ButtonGroup
              fields={fields}
              gutter={gutter}
              data={data}
              onButtonClick={onButtonClick}
            />
          </div>
        )}

        {/* 非按钮控件组合 */}
        {type !== 'FormButtons' && fields.map((field: FieldItemT) => {
          const {
            key,
            span = DEFAULT_SPAN,
            label,
            display = true,
          } = field

          const { rules, addon } = field.props

          return display
            ? (
              <Col key={field.key} span={span}>
                <Form.Item
                  className={field.className}
                  label={['button', 'render'].indexOf(field.type) === -1 ? label : undefined}
                  required={rules && rules.indexOf('required') !== -1}
                  validateStatus={
                    (validation[key] && !validation[key].validated)
                      ? 'error'
                      : ''
                  }
                  help={
                    (validation[key] && !validation[key].validated)
                      ? validation[key].msg
                      : ''
                  }
                >
                  <Field
                    {...field}
                    name={key}
                    key={key}
                    data={data}
                    onChange={onChange}
                    value={data[key]}
                  />
                  {addon && addon(data)}
                </Form.Item>
              </Col>
            )
            : null
        })}
      </div>
    </Row>
  )
}
