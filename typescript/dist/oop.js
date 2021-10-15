"use strict";
// 三大概念
// 1、封装
// 2、继承
// 3、多态
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 具有抽象方法的类，叫做抽象类
var Man = /** @class */ (function () {
    function Man() {
        this.gender = '男';
    }
    return Man;
}());
// 当我们自己封装一个类时，可以继承另一个类，同时可以实现多个接口
// 注意1：一个类只能继承（extends）一个其它的类
// 注意2：一个类可以实现（implements）多个其它的接口
// public   它修饰的成员，在其它类中都可以自由访问
// private  它修饰的成员，在其它类中是无法访问的
// protected 它修饰的成员，在其子类中是可以访问
var ItMan = /** @class */ (function (_super) {
    __extends(ItMan, _super);
    function ItMan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.foo = 'foo';
        return _this;
    }
    ItMan.prototype.work = function () {
        console.log('working');
    };
    ItMan.prototype.run = function () {
        console.log('running');
    };
    return ItMan;
}(Man));
// 1、什么是接口？什么是抽象类？
// 2、三个修饰符的特点
