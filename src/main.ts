const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1

function isSafeInteger(value: any): value is number {
  return Number.isInteger(value) && Math.abs(value) <= MAX_SAFE_INTEGER
}

/**
 * These kinds of value are deemed to be useless:
 * - Any type different than `string`, includes `undefined`, `null`, etc.
 * - Empty string.
 * - `String` class instance.
 * @param str - The string to test.
 * @returns Is "useless" or not?
 */
export function isUselessString(str: any): boolean {
  return (
    typeof str !== 'string'
    || str.length === 0
  )
}

/**
 * These kinds of value are deemed to be useless:
 * - Any type different than `string`, includes `undefined`, `null`, etc.
 * - Empty string.
 * - `String` class instance.
 * @param str - The string to test.
 * @returns Is "useful" or not?
 */
export function isUsefulString(str: any): str is string {
  return (
    typeof str === 'string'
    && str.length > 0
  )
}

/**
 * These kinds of value are deemed to be useless:
 * - Any type different than `number`, includes `undefined`, `null`, etc.
 * - `Infinity`, `-Infinity`.
 * - `NaN`.
 * - `Number` class instance.
 * @param num - The number to test.
 * @returns Is "useless" or not?
 */
export function isUselessNumber(num: any): boolean {
  return (
    typeof num !== 'number'
    || !isFinite(num)
  )
}

/**
 * These kinds of value are deemed to be useless:
 * - Any type different than `number`, includes `undefined`, `null`, etc.
 * - `Infinity`, `-Infinity`.
 * - `NaN`.
 * - `Number` class instance.
 * @param num - The number to test.
 * @returns Is "useful" or not?
 */
export function isUsefulNumber(num: any): num is number {
  return (
    typeof num === 'number'
    && isFinite(num)
  )
}

/**
 * These kinds of value are deemed to be useless:
 * - Any type different than `number`, includes `undefined`, `null`, etc.
 * - Floats.
 * - Unsafe integer. (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)
 * - `Infinity`, `-Infinity`.
 * - `NaN`.
 * - `Number` class instance.
 * @param int - The number to test.
 * @returns Is "useless" or not?
 */
export function isUselessInt(int: any): boolean {
  const isSafeInt = Number.isSafeInteger != null ? Number.isSafeInteger : isSafeInteger
  return (
    typeof int !== 'number'
    || !isFinite(int)
    || !isSafeInt(int)
  )
}

/**
 * These kinds of value are deemed to be useless:
 * - Any type different than `number`, includes `undefined`, `null`, etc.
 * - Floats.
 * - Unsafe integer. (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)
 * - `Infinity`, `-Infinity`.
 * - `NaN`.
 * - `Number` class instance.
 * @param int - The number to test.
 * @returns Is "useful" or not?
 */
export function isUsefulInt(int: any): int is number {
  const isSafeInt = Number.isSafeInteger != null ? Number.isSafeInteger : isSafeInteger
  return (
    typeof int === 'number'
    && isFinite(int)
    && isSafeInt(int)
  )
}

/**
 * These kinds of number-string are deemed to be useless:
 * - Any type different than `string`, include `undefined`, `null`, **even `number`**.
 * - Strings contain something other than digit and point.
 * - Empty strings.
 * @param str - The string to test.
 * @returns Is "useless" or not?
 */
export function isUselessNumberString(str: any): boolean {
  return (
    typeof str !== 'string'
    || !/^[\d.]+$/.test(str)
  )
}

/**
 * These kinds of number-string are deemed to be useless:
 * - Any type different than `string`, include `undefined`, `null`, **even `number`**.
 * - Strings contain something other than digit and point.
 * - Empty strings.
 * @param str - The string to test.
 * @returns Is "useful" or not?
 */
export function isUsefulNumberString(str: any): str is string {
  return (
    typeof str === 'string'
    && /^[\d.]+$/.test(str)
  )
}

/**
 * These kinds of int-string are deemed to be useless:
 * - Any type different than `string`, include `undefined`, `null`, **even `number`**.
 * - Strings contain something other than digit.
 * - Empty strings.
 * @param str - The string to test.
 * @returns Is "useless" or not?
 */
export function isUselessIntString(str: any): boolean {
  return (
    typeof str !== 'string'
    || !/^\d+$/.test(str)
  )
}

/**
 * These kinds of int-string are deemed to be useless:
 * - Any type different than `string`, include `undefined`, `null`, **even `number`**.
 * - Strings contain something other than digit.
 * - Empty strings.
 * @param str - The string to test.
 * @returns Is "useful" or not?
 */
export function isUsefulIntString(str: any): str is string {
  return (
    typeof str === 'string'
    && /^\d+$/.test(str)
  )
}

/**
 * Combine `isNull` & `isUndefined`, similar to Lodash.
 * @param value - The value to test.
 * @returns Is "null" or "undefined"?
 */
export function isNil(value: any): value is null|undefined {
  return value === null || value === undefined
}
