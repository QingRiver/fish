/**
 *
 * @param {string} name 名字,默认为World
 * @param {string} lang 语言  默认为 'english'
 * @returns {string} 见单测
 */
const sayHello = (name, lang) => {
  //TODO: 考察点: 1.常量  2.函数默认值
  return `${name},${lang}`
}

export { sayHello }