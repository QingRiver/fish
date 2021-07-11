/**
 *
 * @param {number} n 求和范围 1,2,3...n
 * @returns {number} 范围求和结果
 */
function sumRange(n) {
  let res = 0;
  //TODO: 把程序改对使得执行此文件不报错
  for(i=1;i<=n;i++){
    res+=i;
  };
  return res;
}

//检查函数
const assert = (actual, except) => {
  if (actual !== except) {
    throw new Error(`except get >>> ${except} but get >>> ${actual}\n`);
  } else {
    return actual;
  }
};

//测试用例
const datas = [
  { n: 0, r: 0 },
  { n: 1, r: 1 },
  { n: 3, r: 6 },
  { n: 100, r: 5050 }
];

const test = fn => (n, r) => assert(fn(n), r);
const testSumRange = test(sumRange);
datas.map(({ n, r }) => testSumRange(n, r));
