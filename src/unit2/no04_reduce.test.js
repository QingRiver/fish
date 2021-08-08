import { reduceSum, countLetter, trasn2Dto1D } from './no04_reduce'

describe('no04 reduce', () => {
  it('reduceSum', () => {
    expect(reduceSum([])).toBe(0)
    expect(reduceSum([1, 2, 3, 4])).toBe(10)
  })

  it('countLetter', () => {
    expect(countLetter('')).toStrictEqual({})
    expect(countLetter('add')).toStrictEqual({ a: 1, d: 2 })
    expect(countLetter('aaa')).toStrictEqual({ a: 3 })
  })

  it('trasn2Dto1D', () => {
    expect(trasn2Dto1D([])).toStrictEqual([])
    expect(trasn2Dto1D([[], []])).toStrictEqual([])
    expect(
      trasn2Dto1D([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toStrictEqual([])
  })
})
