import moment from 'moment';
import { notEmptyValue } from './string';

export default {};

/**
 * 将值转换为时间戳
 * @param value
 * @returns
 */
export const getDateTimeStamp = (value: any): number => {
  if (notEmptyValue(value)) return moment(value).valueOf();
  return null;
};

/**
 * 将值转换为时间戳
 * @param value
 * @returns
 */
export const getDateMoment = (value: any): RJForm.DateType => {
  if (notEmptyValue(value)) return moment(value);
  return null;
};

/**
 * 将时间范围值转换为时间戳
 * @param value
 * @returns
 */
export const getRangeTimeStamp = (value: any[]): any[] => {
  const result = [null, null];
  if (Array.isArray(value)) {
    value.forEach((val, idx) => {
      result[idx] = getDateTimeStamp(val);
    });
  }
  return result;
};

/**
 * 将时间戳数组转换为moment数组
 * @param value
 * @returns
 */
export const getRangeMoment = (
  value: [RJForm.DateType, RJForm.DateType] | undefined | null,
): [RJForm.DateType, RJForm.DateType] => {
  const result: [RJForm.DateType, RJForm.DateType] = [null, null];
  if (value && Array.isArray(value)) {
    value.forEach((val, idx) => {
      result[idx] = val ? moment(val) : null;
    });
  }
  return result;
};
