/*
* index.js
*/
import testJson from './test.json'
import $ from 'jquery';

// webpack 只能正常处理js 和json 文件!!!!
// 对于css。image 不能处理，需要引入loader
// import './index.css';
function test(a, b) {
    console.log(a+b)
}

console.log(testJson);
test(1,3);
console.log($)