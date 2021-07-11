import { range, iterSum } from './range'

describe('test range.js', () => {
  it('should range pass', () => {
    expect(range(0)).toStrictEqual([])
    expect(range(1)).toStrictEqual([1])
    expect(range(4)).toStrictEqual([1, 2, 3, 4])
    expect(range(2, 6)).toStrictEqual([2, 3, 4, 5])
    expect(range(7, 3)).toStrictEqual([])
  })

  it('should forin pass', () => {
    expect(iterSum(3)).toBe(6)
  })
})
