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

