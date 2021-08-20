//数字重量
//数字重量是每个数位上数字加起来的和
//例如 100 的数字重量是1 ; 101的数字重量是2 ;  99的数字重量是18
//根据数字重量排序

export const sortNumberWeight = (numberStringList) => {
  const getwei = (num) => {
    let res = 0
    const numArr = num.split('')
    numArr.forEach(function (index) {
      res += Number(index)
    })
    return res
  }
  let res = numberStringList.sort((a, b) => {
    return getwei(a) - getwei(b)
  })
  return res
}
