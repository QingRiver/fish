/**
 *
 * @param {string} name 名字,默认为World
 * @param {string} lang 语言  默认为 'english'
 * @returns {string} 见单测
 */
const sayHello = (name = 'World', lang = 'english') => {
  //TODO: 考察点: 1.常量  2.函数默认值
  const getPrefix = (lang) => {
    switch (lang) {
      case 'spanish':
        return 'Hola'
      case 'french':
        return 'Bonjour'
      default:
        return 'Hello'
    }
  }
  return `${getPrefix(lang)},${name}`
}

export { sayHello }
