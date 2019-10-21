// @flow
import { notEmptyValue } from './common'
import { ValidatorT, ValidatorChildT, ExtendValidator } from '../index.d'

class Validation {
  validators: ValidatorT = {
    // 必填
    required: {
      validator: (value: string | any[]) => notEmptyValue(value) && value.length > 0,
      errorMsg: '必填',
    },
    min_length: {
      validator: (value: string | any[], length: number) => value && value.length >= length,
      errorMsg: (length: number) => `长度不小于${length}`,
    },
    max_length: {
      validator: (value: string | any[], length: number) => value && value.length <= length,
      errorMsg: (length: number) => `长度不大于${length}`,
    },
    length: {
      validator: (value: string | any[], length: number) => value && value.length === length,
      errorMsg: (length: number) => `长度必须为${length}`,
    },
    // 手机
    mobile: {
      validator: (value: string) => /^1\d{10}/.test(value),
      errorMsg: '请输入正确11位手机号',
    },
    // 数字
    number: {
      validator: (value: any) => /\d/.test(value),
      errorMsg: '必须位数字格式',
    },
    // 是否整数
    int: {
      validator: (value: any) => !/\D/.test(value),
      errorMsg: '必须为整数',
    },
    // 正数
    positive_number: {
      validator: (value: any) => parseFloat(value) > 0,
      errorMsg: '必须为正数',
    },
    // 不为负数
    not_negative: {
      validator: (value: any) => parseFloat(value) >= 0,
      errorMsg: '不能为负数',
    },
    // 不小于
    min: {
      validator: (value: any, minValue: number) => parseFloat(value) >= minValue,
      errorMsg: (minValue: number) => `必须大于或等于${minValue}`,
    },
    // 大于
    more_than: {
      validator: (value: any, minValue: number) => parseFloat(value) > minValue,
      errorMsg: (minValue: number) => `必须大于${minValue}`,
    },
    // 不能大于
    max: {
      validator: (value: any, maxValue: number) => parseFloat(value) <= maxValue,
      errorMsg: (maxValue: number) => `必须小于或等于${maxValue}`,
    },
    // 小于
    less_than: {
      validator: (value: any, maxValue: number) => parseFloat(value) < maxValue,
      errorMsg: (maxValue: number) => `必须小于${maxValue}`,
    },
    // price
    price: {
      validator: (value: any) => {
        if (!/\d/.test(value)) return false

        const stringValue: string = value.toString()
        if (stringValue.indexOf('.') !== -1) {
          const p: string[] = stringValue.split('.')
          if (p.length > 2) return false
          if (p[1].length > 2) return false
        }
        return true
      },
      errorMsg: '必须要符合货币格式,如 10.23',
    },
    telephone: {
      validator: (value: string) => /^0\d{2,3}-\d{7,8}$/.test(value),
      errorMsg: '需符合（区号-电话号码）的格式',
    },
    // 电子邮箱后缀
    email_suffix: {
      validator: (value: string) => {
        if (!value) return false
        const reg = /^@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        return reg.test(value)
      },
      errorMsg: '请输入正确的邮箱后缀(包括@)',
    },
    // 电子邮箱
    email: {
      validator: (value: string) => {
        const reg = /[a-z0-9!#$%&'*+"=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+"=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        return reg.test(value)
      },
      errorMsg: '请输入正确的邮箱',
    },
    // 用户名
    username: {
      validator: (value: string) => /^([a-zA-Z0-9_-]{2,20})$/.test(value),
      errorMsg: '由长度为5～20位的数字、字母组成',
    },
    // 密码
    password: {
      validator: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S][^\u4e00-\u9fa5]{6,20}$/.test(value),
      errorMsg: '由长度为6～16位的数字、大小字母以及符号组成',
    },
    // 身份证
    id_card: {
      validator: (value: string) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value),
      errorMsg: '身份证号码不符合',
    },
    vin: { // 车架号
      validator: (value: string) => /^([a-zA-Z0-9_-]{17})$/.test(value),
      errorMsg: '由长度为17位的数字、字母组成',
    },
    engine_no: { // 发动机号
      validator: (value: string) => /^([a-zA-Z0-9_-]{6,20})$/.test(value),
      errorMsg: '由长度为6~20位的数字、字母组成',
    },
    license_plate_number: { // 车牌号
      validator: (value: string) => /^([\u4E00-\u9FA5][a-zA-Z0-9_-]{6,7})$/.test(value),
      errorMsg: '由长度为7~8位的中文、数字、字母组成',
    },
  }

  extendValidators(validators: Array<ExtendValidator>): void {
    validators.forEach((validator: ExtendValidator): void => {
      const { name, ...rest } = validator
      this.validators[name] = rest
    })
  }

  check(v: string | number, rules: string[]) {
    let value = v
    let success = { validated: true, msg: '' }

    if (!rules || !(rules instanceof Array)) {
      return success
    }

    if (typeof value === 'string') {
      value = value.trim()
    }

    rules.some(rule => {
      let result = true
      let validator: ValidatorChildT
      let sRule: any[] = []

      if (rule === 'required') {
        if (notEmptyValue(value)) value = value.toString()
        validator = this.validators[rule]
        result = validator.validator(value)
      } else if (notEmptyValue(value)) {
        if (rule.indexOf(':') !== -1) {
          sRule = rule.split(':')
          validator = this.validators[sRule[0]]
          result = validator.validator(value, sRule[1])
        } else {
          validator = this.validators[rule]
          result = validator.validator(value)
        }
      }

      if (!result) {
        const err = validator?.errorMsg
        success = {
          validated: false,
          msg: typeof err === 'function' ? err(sRule[1]) : err,
        }
        return true
      }
      return false
    })
    return success
  }
}

export default new Validation()
