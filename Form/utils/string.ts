export const randomString = (length = 8): string => {
  const stringArray: string[] = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const result = [];
  for (let i = 0; i < length; i++) {
    const index = Math.round(Math.random() * stringArray.length);
    result.push(stringArray[index]);
  }
  return result.join('');
};

export const notEmptyValue = (value: any): boolean => (
  (value !== '' && value !== undefined && value !== null) // 非空
  || (Array.isArray(value) && value.length > 0) // 数组也非空
);

export default {};
