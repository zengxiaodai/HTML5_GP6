"use strict";
var msg = 'hello world';
var age = 100;
var bol = true;
var list1 = [1, 2, 4, 9];
var list2 = ['a', 'b', 'c'];
var list3 = [true, false, 1, '2'];
var list4 = [1, 2, 3, 4];
// list4[0] = 1000
var tup1 = ['hello', 100];
tup1[0] = 'world';
var Cate;
(function (Cate) {
    Cate["office"] = "\u529E\u516C\u7528\u54C1";
    Cate["car"] = "\u6C7D\u8F66\u751F\u6D3B";
    Cate["clothe"] = "\u7537\u88C5\u5973\u88C5";
})(Cate || (Cate = {}));
console.log(Cate.office);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
console.log(Color[0]);
{
    var name_1 = 'Lucy';
}
var info = {
    user: 'Lucy',
    age: 30
};
var u1 = {
    user: 'zhangsan',
    age: 100,
    addr: '深圳',
    children: ['lisi', 'wangwu'],
    avatar: '',
    id: '44444444'
};
var i1 = {
    name: 'zhangsan',
    age: 100
};
var aa = [1, 2, 3, 4];
var bb = {
    name: 'zhangsan',
    age: 100
};
var cc = 200;
var l1 = cc.length;
var l2 = cc.length;
// type定义的类型，可以进行类型交叉和类型联合。
// interface定义的类型，不能进行交叉和联合。
