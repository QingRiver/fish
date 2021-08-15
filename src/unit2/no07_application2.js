//获取vip用户列表,计算总账单并按照时间倒序排序

export const getVipBillList = (billLists, vipList) => {
  const VipBillLists = billLists.filter((billList) => vipList.includes(billList.name))
  let calBill = (cart) => {
    let res = 0
    cart.forEach((index) => (res += index.price * index.count))
    return res
  }
  const resVipBillList = VipBillLists.map((billList) => {
    return billList.name + ':' + calBill(billList.cart) + '元'
  })
  return resVipBillList
}
