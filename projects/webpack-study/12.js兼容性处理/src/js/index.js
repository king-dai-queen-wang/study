// 全部兼容性处理
// import '@babel/polyfill';

const dww = (x, y) => x + y;
// 对下一行不进行eslint检查
// eslint-disable-next-line
console.log(dww(1, 2));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行完了');
    resolve(111);
  }, 1000);
});
promise.then((res) => console.log(res));
