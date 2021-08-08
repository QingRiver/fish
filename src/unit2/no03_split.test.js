import { getHeadWord, getTimeString, shieldFuck } from './no03_split'

describe('no03 split', () => {
  it('getHeadWord', () => {
    expect(getHeadWord('Hello,world!')).toBe('Hw')
    expect(
      getHeadWord(
        'I come into a dream.Leaves fall down but spring,over a lake birds flying,village have its nice moring,everywhere can feel happiness,Years have never been,owners dont need anything,until the sun bring another wind',
      ),
    ).toBe('ILoveYou')
  })

  it('getTimeString', () => {
    expect(getTimeString('12/25/2021')).toBe('2021年12月25日')
    expect(getTimeString('12/12/2012')).toBe('2012年12月12日')
  })

  it('shieldFuck', () => {
    expect(shieldFuck('fuck you')).toBe('f**k you')
    expect(shieldFuck('fuck the     dog')).toBe('f**k the dog')
  })
})
