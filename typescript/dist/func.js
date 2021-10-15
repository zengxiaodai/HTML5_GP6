"use strict";
// 泛型：定义时不指定具体类型，使用时再指定具体类型
// function print1(arg:string): void {
//   console.log(arg)
// }
//
// function print2(arg:number): void {
//   console.log(arg)
// }
function print(arg) {
    console.log('arg', arg);
}
print('hello');
print(100);
function calArea(p1, p2) {
    return { w: p1.w + p2.w, h: p2.h + p1.h };
}
calArea({ w: 10, h: 10 }, { w: 20, h: 20 });
function swap(arr) {
    return [arr[1], arr[0]];
}
swap(['hello', 100]);
function foo1(arg) {
    console.log(arg);
}
function foo2(arg1, arg2) {
    return arg1 + arg2;
}
function foo3(arg1, arg2) {
    if (arg2 === void 0) { arg2 = ''; }
    return arg1 + arg2;
}
function foo4(n1) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return n1;
}
foo4(1);
foo4(1, 2, 3, 4, 56, 7, 88);
function foo5() {
    return new Error('未知错误');
}
function run(arg1, arg2) {
    // 在这个方法体，要考虑实现上面所有的方法
}
