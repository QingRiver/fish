/**
 *
 * @param {number} n 求和范围 1,2,3...n
 * @returns {number} 范围求和结果
 */
export function sumRange(n) {
  let res = 0
  // TODO: 把程序改对使得执行此文件不报错
  for (let i = 0; i <= n; i++) {
    res += i
  }
  return res
}
