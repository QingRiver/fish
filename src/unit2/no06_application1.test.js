import { sortNumberWeight } from './no06_application1'

describe('no06 sortNumberWeight', () => {
  it('sortNumberWeight', () => {
    expect(sortNumberWeight(['11', '10', '9'])).toStrictEqual(['10', '11', '9'])
    expect(sortNumberWeight(['56', '90', '100', '170'])).toStrictEqual(['100', '170', '90', '56'])
  })
})
