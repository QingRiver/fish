import { add1, add2, add3, add4, add5 } from './addn'

describe('test addn.js', () => {
  it('test addn', () => {
    expect(add1(add2(add3(add4(add5(0)))))).toBe(15)
  })
})
