//获取vip用户列表,计算总账单并按照时间倒序排序

const sumCart = (total, item) => total + item.price * item.count

export const getVipBillList = (billLists, vipList) =>
  billLists
    .filter((billList) => vipList.includes(billList.name))
    .map((billList) => `${billList.name}:${billList.cart.reduce(sumCart, 0)}元`)
