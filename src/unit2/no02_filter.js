//获取列表中的奇数
export const getOddList = (numberList) => {
  let isOdd = (number) => {
    if (number % 2 == 1) return true
    else return false
  }
  let res = numberList.filter((point) => isOdd(point))
  return res
}

//获取列表中不在第三象限的点
export const getPositives = (numberList) => {
  let isnotThree = (numberP) => {
    if (numberP[0] < 0 && numberP[1] < 0) return false
    else return true
  }
  let res = numberList.filter((point) => isnotThree(point))
  return res
}
