// Array map 使用

//计算出移动后的坐标
export const getTargetPointList = (pointArray) => {
  let res = pointArray.map(function (obj) {
    let x = obj.source.x + obj.moveX
    let y = obj.source.y + obj.moveY
    return { x, y }
  })
  return res
}

//计算三科总分
export const getTotalGrede = (gredeArray) => {
  let res = gredeArray.map((grade) => grade.chinese + grade.math + grade.english)
  return res
}
