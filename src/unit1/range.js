const range = (n, end) => {
  //TODO: 生成一个左开右闭的数组,省略第一个参数时默认从1开始
  // 考察点 参数判断
  let res = []
  if (!end) {
    //单参数的情况
    if (n === 0) return res
    for (let i = 1; i <= n; i++) {
      res.push(i)
    }
  } else {
    //多参数的情况
    if (n >= end) return res
    for (let i = n; i < end; i++) {
      res.push(i)
    }
  }
  return res
}

const iterSum = (n) => {
  //TODO:使用for in 求和 模拟Python的 for in
  let sum = 0
  //这里的隐藏坑点是 for in 本来是用来遍历对象的,因为数组也是一个对象,所以你得到的是键值 '1','2','3'
  // 单测用例里  for in range(3) 得到的结果是 '0012', 因为 sum += i , i是一个字符串,所以 += 变成了字符串链接
  // 记得后面遍历数组对象用 for of
  for (const i of range(n)) {
    sum += i
  }
  return sum
}

export { range, iterSum }
