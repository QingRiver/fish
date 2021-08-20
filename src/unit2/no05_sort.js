//降序排序
export const sortDesc = (numberList) => {
  return numberList.sort((a, b) => b - a)
}

//苹果🍎记两分,香蕉🍌记一分,按照分值从小到大排序
export const sortFruits = (fruitsList) => {
  const sortVal = { '🍎': 2, '🍌': 1 }
  const getVal = (str) => {
    const strs = [...str]
    let val = 0
    strs.forEach(function (index) {
      val += sortVal[index]
    })
    return val
  }
  let mapped = fruitsList.map(function (el, i) {
    return { index: i, value: getVal(el) }
  })
  mapped.sort((a, b) => a.value - b.value)
  let res = mapped.map(function (el) {
    return fruitsList[el.index]
  })
  return res
}
