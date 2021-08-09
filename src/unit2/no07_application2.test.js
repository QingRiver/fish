import { getVipBillList } from './no07_application2'

describe('no07 getVipBillList', () => {
  it('getVipBillList', () => {
    expect(
      getVipBillList(
        [
          { name: '小王', cart: [{ type: '火腿肠', price: 2, count: 1 }], create_at: '8月1日' },
          {
            name: '小赵',
            cart: [
              { type: '茅台', price: 9999, count: 1 },
              { type: '湿纸巾', price: 0.5, count: 2 },
            ],
            create_at: '8月3日',
          },
          { name: '小章', cart: [{ type: '可乐', price: 3, count: 24 }], create_at: '8月2日' },
        ],
        ['小赵', '小章'],
      ),
    ).toStrictEqual(['小赵:10000元', '小章:72元'])
  })
})
