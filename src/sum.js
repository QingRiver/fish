/**
 *
 * @param {number} n 求和范围 1,2,3...n
 * @returns {number} 范围求和结果
 */
export function sumRange(n) {
  let res = 0
  for (let i = 1; i <= n; i++) {
    res += i
  }
  return res
}
