import { getOddList, getPositives } from './no02_filter'

describe('no02 fiilter', () => {
  it('getOddList', () => {
    expect(getOddList([])).toStrictEqual([])
    expect(getOddList([1, 2, 3, 4, 5])).toStrictEqual([1, 3, 5])
  })

  it('getPositives', () => {
    expect(getPositives([])).toStrictEqual([])

    expect(
      getPositives([
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
        [2, 3],
      ]),
    ).toStrictEqual([
      [1, 1],
      [1, -1],
      [-1, 1],
      [2, 3],
    ])
  })
})
