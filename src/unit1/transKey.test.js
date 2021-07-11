import { transKey } from './transKey'

describe('test transkey.js', () => {
  it('should trans all key', () => {
    const obj = { 子: '老鼠', 丑: '老牛', 寅: '老虎' }
    const map = { 1: '子', 2: '丑', 3: '寅' }
    expect(transKey(obj, map)).toStrictEqual({
      1: '老鼠',
      2: '老虎',
      3: '老牛',
    })
  })
})
