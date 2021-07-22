//TODO: addn 构造一系列小add函数 考察点:高阶函数

const add = (a) => (b) => a + b

const add1 = add(1)
const add2 = add(2)
const add3 = add(3)
const add4 = add(4)
const add5 = add(5)

export { add1, add2, add3, add4, add5 }
