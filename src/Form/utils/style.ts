
export const removeLabelStyleWidth = (id: string) => {
  const attributeName = `form-label-width-${id}`;
  const DOM = document.getElementById(attributeName);
  if (DOM) document.head.removeChild(DOM);
  return attributeName;
};

export const addLabelStyleWidth = (width: number, labelDirection: 'vertical' | 'horizontal', id: string) => {
  const attributeName = removeLabelStyleWidth(id);

  if (labelDirection === 'horizontal') {
    const STYLE = document.createElement('style');
    STYLE.id = attributeName;
    let styles = `#${id} .ant-form-item {display: flex; width: 100%; flex-flow: row;}\n`;
    styles += `#${id} .ant-form-item-label { width: ${width}px; }\n`;
    styles += `#${id} .ant-form-item-control {flex-grow: 1}`;
    STYLE.innerHTML = styles;
    document.head.appendChild(STYLE);
  }
};
