import defaultRules from './default';

export default {};

/**
 * 扩展的方法
 * @param rules
 */
export const extendRules = (rules: RJForm.RuleItem[]): void => {
  rules.forEach((rule) => {
    const index = defaultRules.findIndex((item) => rule.name === item.name);
    if (index !== -1) {
      console.warn(`规则${rule.name}已存在, 扩展规则会覆盖默认规则`);
      defaultRules[index] = rule;
    }
    defaultRules.push(rule);
  });
};

/**
 * 根据key查找
 * @param name
 * @returns
 */
const getRuleItemByName = (name: string): RJForm.RuleItem | null => {
  const foundRule = defaultRules.find((rule) => rule.name === name);
  return foundRule;
};

/**
 * 校验
 * @param value
 * @param rules
 * @returns
 */
export const validate = (
  key: string,
  value: any,
  rules: RJForm.RuleItem[],
): RJForm.ValidatedResult => {
  let result = {
    state: true,
    message: '',
  };

  rules.some((rule) => {
    const { message, ...ruleItem } = rule;
    const ruleName = Object.keys(ruleItem)?.[0];
    const ruleValue = ruleItem?.[ruleName];
    if (!ruleName) return false;

    // 否则需要在现有的规则去查找
    const defaultRuleItem = getRuleItemByName(ruleName);
    if (!defaultRuleItem) {
      console.warn(`未找到${ruleName}的校验规则`);
      return false;
    }

    // message
    let msg = message || defaultRuleItem.message;
    msg = typeof msg === 'function' ? msg(ruleValue) : msg;

    // 自定义的validator
    if (typeof ruleValue === 'function') {
      const state = ruleValue(value);
      result = {
        state,
        message: state ? '' : msg,
      };
      return !state;
    }

    // 如果是boolean的时候，true值需要校验
    if (
      (typeof ruleValue === 'boolean' && ruleValue) ||
      ['string', 'number'].indexOf(typeof ruleValue) !== -1
    ) {
      const state = defaultRuleItem.validator(value, ruleValue);
      result = {
        state,
        message: state ? '' : msg,
      };
      return !state;
    }

    return false;
  });

  return result;
};
