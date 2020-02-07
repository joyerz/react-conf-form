import * as React from 'react'
import memoize from 'memoize-one'
import { Spin } from 'antd'
import { addFields } from '@Form/Field'
import FormValidator from './utils/FormValidator'
import Row from './Row'
import { RJFormProps, FieldsConfT } from './index.d'
import { addLabelStyleWidth, removeLabelStyleWidth } from '@Form/utils/common'
import FooterButtons from './FooterButtons'

import './index.scss'

type State = {}

export default class RJForm extends React.Component<RJFormProps, State> {
  static defaultProps = {
    spinning: false,
    validateOnChange: true,
    dataSource: {},
    extendValidators: [],
    extendFields: [],
    fields: [],
    labelDirection: 'horizontal', // 'vertical' | 'horizontal'
    labelWidth: 80,
  }

  mounted = false

  data = {} // form数据

  dataChanged = false

  validation = {} // 验证结果

  /**
   * detect data source whether is changed
   */
  isDataSourceChanged = memoize((dataSource: {}) => {
    // USELESS "|| condition"
    // because dataSource is the key of method running and need to
    // use it to avoid that eslint report an error "dataSource is
    // defined but never used"
    this.dataChanged = true || typeof dataSource === 'object'

    return this.dataChanged
  })

  /**
   * get data from dataSource or local data,
   * and also set up "validation"
   */
  convertDataFromFields = memoize((fields: Array<any>, dataSource: any) => {
    fields.forEach((row: any) => {
      if (row.type !== 'FormButtons') {
        row.fields.forEach((item: any) => {
          if (item.display !== false && item.type !== 'render' && item.type !== 'button') {
            // 如果数据源(props)发生改变，取数据源，否则取本地(state)
            this.data[item.key] = this.dataChanged
              ? dataSource[item.key]
              : this.data[item.key]

            // 如果数据源(props)发生改变： 如果有值，重新校验；没有值，不校验
            const init = this.validateField(item.key, this.data[item.key], item.props?.rules || [])
            this.validation[item.key] = {
              ...init,
              rules: item.props?.rules || [],
            }
          }
        })
      }
    })
    this.dataChanged = false
  })

  id = `FORM_${parseInt((Math.random() * 10000).toString(), 10).toString()}`

  constructor(props) {
    super(props)
    // add extendFields into form generating/mapping
    addFields(this.props.extendFields)
  }

  componentDidMount() {
    this.mounted = true
    // extend validators into Form Validator
    FormValidator.extendValidators(this.props.extendValidators)
  }

  componentWillUnmount() {
    removeLabelStyleWidth(this.id)
    this.mounted = false
  }

  /**
   * on field change
   * @param key
   * @param value
   */
  onChange = (key: string, value: any): void => {
    // console.log('did change', key, value)
    this.data = {
      ...this.data,
      [key]: value,
    }
    if (this.props.validateOnChange && this.validation[key]) {
      this.validation[key] = {
        ...FormValidator.check(value, this.validation[key].rules),
        rules: this.validation[key].rules,
      }
    }
    if (this.props.onChange) {
      this.props.onChange(key, value, this.data)
    }
    this.setState({})
  }

  /**
   * 验证所有fields
   */
  validate = () => {
    let validated = true
    this.props.fields.forEach((row: any) => {
      if (row.type !== 'FormButtons') {
        row.fields.forEach((item: any) => {
          if (item.display !== false && item.type !== 'render' && item.type !== 'button') {
            const { key } = item
            const value = this.data[key]
            const result = FormValidator.check(value, this.validation[key].rules)

            this.validation[key] = {
              ...result,
              rules: this.validation[key].rules,
            }
            if (!this.validation[key].validated) {
              validated = false
            }
          }
        })
      }
    })
    this.setState({})
    return validated
  }

  /**
   * on Submit
   * @param e
   */
  onSubmit = (e?: React.SyntheticEvent<EventTarget>): void => {
    if (e) e.preventDefault()
    if (!this.validate()) return

    console.log('submit data', this.data)

    if (this.props.onSubmit) this.props.onSubmit(this.data)
  }

  /**
   * on Reset
   */
  onReset = (): void => {
    if (this.props.onReset) this.props.onReset()
  }

  /**
   * button click
   * @param type
   * @param cb
   */
  onButtonClick = (type: string, cb?: Function): void => {
    if (type === 'submit') {
      this.onSubmit()
    } else if (type === 'reset') {
      this.onReset()
    } else if (cb) {
      cb(this.data)
    }
  }

  /**
   * 获取校验
   * @param key
   * @param value
   * @param rules
   */
  validateField = (key: string, value: any, rules: Array<string> = []) => {
    if (this.validation[key] !== undefined && value !== undefined) {
      return FormValidator.check(value, rules)
    }
    return { validated: true, msg: '' }
  }

  render() {
    const {
      fields, dataSource, labelDirection, labelWidth,
    } = this.props
    this.isDataSourceChanged(dataSource)
    this.convertDataFromFields(fields, dataSource || {}) // data to fields
    addLabelStyleWidth(labelWidth, labelDirection, this.id)

    return (
      <Spin spinning={this.props.spinning}>
        <form onSubmit={this.onSubmit} id={this.id}>
          {fields.map((field: FieldsConfT, idx: number) => {
            const key = `row_${idx}`
            const display = field.display === undefined ? true : field.display
            const type = field.type || 'field'
            if (!display) return null

            return type === 'field'
              ? (
                <Row
                  key={key}
                  {...field}
                  data={this.data}
                  validation={this.validation}
                  labelDirection={labelDirection}
                  onChange={this.onChange}
                />
              )
              : (
                <FooterButtons
                  key={key}
                  {...field}
                  onButtonClick={this.onButtonClick}
                />
              )
          })}
        </form>
      </Spin>
    )
  }
}
