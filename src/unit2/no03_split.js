//获取藏头诗隐藏的单词
export const getHeadWord = (poetryString) => {
  const resArr = poetryString.split(/,|[.]/)
  let res = ''
  resArr.forEach(function (index) {
    res += index[0]
  })
  return res
}

//获取时间显示字符串
export const getTimeString = (numberTimeStr) => {
  const resArr = numberTimeStr.split('/')
  let res = resArr[2] + '年' + resArr[0] + '月' + resArr[1] + '日'
  return res
}

//屏蔽不雅词汇fuck
export const shieldFuck = (string) => {
  const res = string.replace(/\s+/gi, ' ').replace(/fuck/gi, 'f**k')
  return res
}
