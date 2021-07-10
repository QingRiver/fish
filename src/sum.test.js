import { sumRange } from './sum'

describe('test sum.js', () => {
  it('test sumRange', () => {
    expect(sumRange(0)).toBe(0)
    expect(sumRange(3)).toBe(6)
    expect(sumRange(100)).toBe(5050)
  })
})
