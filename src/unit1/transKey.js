const transKey = (obj, map) => {
  //TODO:根据映射表替换key
  let newObj = {}
  for (let key in map) {
    newObj[key] = obj[map[key]]
  }
  return newObj
}

export { transKey }
