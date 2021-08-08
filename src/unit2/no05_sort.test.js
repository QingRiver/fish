import { sortDesc, sortFruits } from './no05_sort'

describe('no05 sort', () => {
  it('sortDesc', () => {
    expect(sortDesc([])).toStrictEqual([])
    expect(sortDesc([1, 2, 3])).toStrictEqual([3, 2, 1])
  })

  it('sortFruits', () => {
    expect(sortFruits(['🍎', '🍌'])).toStrictEqual(['🍌', '🍎'])
    expect(sortFruits(['🍎🍎', '🍌🍌', '🍌🍎'])).toStrictEqual(['🍌🍌', '🍌🍎', '🍎🍎'])
  })
})
