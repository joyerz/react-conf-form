export const randomString = (length = 8): string => {
  const stringArray: string[] = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    '',
  );
  const result = [];
  for (let i = 0; i < length; i++) {
    const index = Math.round(Math.random() * stringArray.length);
    result.push(stringArray[index]);
  }
  return result.join('');
};

export const notEmptyValue = (value: any): boolean => {
  const emptyValue = [null, undefined, ''];
  // 非空
  if (emptyValue.indexOf(value) !== -1) {
    return false;
  }
  // 数组也非空

  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  return true;
};

export default {};
