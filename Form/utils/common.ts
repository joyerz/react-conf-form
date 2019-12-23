export default {}

export const notEmptyValue = (value: any): boolean => (
  value !== '' && value !== undefined && value !== null
)

export const simpleClone = <T>(data: T): T => JSON.parse(JSON.stringify(data))

export const addLabelStyleWidth = (width: number, labelDirection: 'vertical' | 'horizontal') => {
  const attributeName = 'form-label-width'
  const DOM = document.getElementById(attributeName)
  if (DOM) document.body.removeChild(DOM)

  if (labelDirection === 'horizontal') {
    const STYLE = document.createElement('style')
    STYLE.id = attributeName
    STYLE.innerHTML = `.ant-form-item-label { width: ${width}px; }`
    document.body.appendChild(STYLE)
  }
}


/**
 * 根据value数组获取数组对象[{label, value}]的多个label值
 */
export const getItemLabelsByValue = (
  items: Array<any>,
  value: Array<any>,
): string | Element => {
  const labels: string[] = []
  value.forEach(val => {
    const findItem = items.find(item => item.value === val)
    if (findItem) {
      labels.push(findItem.label)
    }
  })
  return labels.join('，')
}

/**
 * 根据value获取数组对象[{label, value}]的label值
 * @param items
 * @param value
 * @return {string | null}
 */
export const getItemLabelByValue = (
  items: Array<any>,
  value: string | number,
): string => {
  const found = items.filter(item => item.value === value)
  if (found.length > 0) {
    return found[0].label
  }
  return ''
}

/**
 * get Target value
 * @param e
 */
export const getTargetValue = (e: any) => {
  const target = e && e.target
  let value
  if (target instanceof HTMLElement || notEmptyValue(target?.value)) {
    value = target.value
  } else {
    value = e
  }
  return value
}
