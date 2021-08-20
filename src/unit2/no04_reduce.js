//reduce求和
export const reduceSum = (numberList) => {
  return numberList.reduce((acc, cur) => acc + cur, 0)
}

//计算每个字母出现的次数
export const countLetter = (string) => {
  const wordArr = string.split('')
  let res = wordArr.reduce((allwords, word) => {
    if (word in allwords) allwords[word]++
    else allwords[word] = 1
    return allwords
  }, {})
  return res
}

//二维数组转成一维数组
export const trasn2Dto1D = (arrayList) => {
  let res = []
  arrayList.forEach(function (index) {
    res = res.concat(index)
  })
  return res
}
