// 三大概念
// 1、封装
// 2、继承
// 3、多态

interface Person {
  name: string,
  age: string,
  run(): void
}

// 具有抽象方法的类，叫做抽象类
abstract class Man {
  gender: string = '男'
  // 抽象的成员方法
  abstract work() : void
}

// 当我们自己封装一个类时，可以继承另一个类，同时可以实现多个接口
// 注意1：一个类只能继承（extends）一个其它的类
// 注意2：一个类可以实现（implements）多个其它的接口

// public   它修饰的成员，在其它类中都可以自由访问
// private  它修饰的成员，在其它类中是无法访问的
// protected 它修饰的成员，在其子类中是可以访问
class ItMan extends Man implements Person {
  work() {
    console.log('working')
  }
  run() {
    console.log('running')
  }
  protected foo:string = 'foo'
}

// 1、什么是接口？什么是抽象类？
// 2、三个修饰符的特点
