import { getTargetPointList, getTotalGrede } from './no01_map'

describe('test no01 map', () => {
  it('getTargetPointList', () => {
    expect(getTargetPointList([{ source: { x: 0, y: 0 }, moveX: 0, moveY: 0 }])).toStrictEqual([{ x: 0, y: 0 }])
    expect(getTargetPointList([{ source: { x: 0, y: 0 }, moveX: 10, moveY: 5 }])).toStrictEqual([{ x: 10, y: 5 }])
    expect(
      getTargetPointList([
        { source: { x: 10, y: 10 }, moveX: 5, moveY: 5 },
        { source: { x: 100, y: 100 }, moveX: -99, moveY: 99 },
      ]),
    ).toStrictEqual([
      { x: 15, y: 15 },
      { x: 1, y: 199 },
    ])
  })

  it('getTotalGrede', () => {
    expect(
      getTotalGrede([
        { chinese: 99, math: 99, english: 99 },
        { chinese: 0, math: 0, english: 0 },
        { chinese: 80, math: 80, english: 80 },
      ]).toStrictEqual([297, 0, 240]),
    )
  })
})
