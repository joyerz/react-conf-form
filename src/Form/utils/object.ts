export default {};

export function findArrayObject<T>(array: T[] = [], key:string, value: any):T {
  const found = array.find((item) => item[key] === value);
  return found || null;
}

export const simpleClone = (obj: {[name:string]:any}) => JSON.parse(JSON.stringify(obj));
