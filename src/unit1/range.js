const range = (n = 1, end) => {
  //TODO: 生成一个左开右闭的数组,省略第一个参数时默认从1开始
  // 考察点 参数判断
  let [arr] = Array.from(Array(end - n), (e, i) => i + n)
  return [arr]
}

const iterSum = (n) => {
  //TODO:使用for in 求和 模拟Python的 for in
  let sum = 0
  let arr = range(n)
  for (let i in arr) {
    sum += arr[i]
  }
  return sum
}

export { range, iterSum }
