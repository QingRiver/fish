import { sayHello } from './hello'

describe('test hello.js', () => {
  it('test hello fn', () => {
    expect(sayHello('Chris')).toBe('Hello,Chris')
    expect(sayHello()).toBe('Hello,World')
    expect(sayHello('Elodie', 'spanish')).toBe('Hola,Elodie')
    expect(sayHello('Lauren', 'french')).toBe('Bonjour,Lauren')
  })
})
