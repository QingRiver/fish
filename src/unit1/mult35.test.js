import { mult35 } from './mult35'

describe('test mult35.js', () => {
  it('should return 0 if none', () => {
    expect(mult35(0)).toBe(0)
    expect(mult35(2)).toBe(0)
  })

  it('should return right anster', () => {
    expect(mult35(10)).toBe(23)
    expect(mult35(100)).toBe(2318)
  })
})
