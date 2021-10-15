
// 泛型：定义时不指定具体类型，使用时再指定具体类型

// function print1(arg:string): void {
//   console.log(arg)
// }
//
// function print2(arg:number): void {
//   console.log(arg)
// }

function print<T>(arg: T) : void {
  console.log('arg', arg)
}
print<string>('hello')
print<number>(100)

function calArea<T>(p1: T, p2: T): T {
  return { w: p1.w + p2.w, h: p2.h + p1.h }
}
type Point = {
  w: number,
  h: number
}
calArea<Point>({w:10,h:10},{w:20,h:20})

function swap<T,U>(arr:[T,U]): [U,T] {
  return [arr[1], arr[0]]
}
swap<string,number>(['hello', 100])


function foo1(arg:string): void {
  console.log(arg)
}
function foo2(arg1:string, arg2?:string): string {
  return arg1 + arg2
}
function foo3(arg1: string, arg2:string=''): string {
  return arg1 + arg2
}
function foo4(n1: number, ...rest: Array<number>): number {
  return n1
}
foo4(1)
foo4(1,2,3,4,56,7,88)
function foo5(): never {
  return new Error('未知错误')
}

// 函数重载（函数名字相同，但参数类型、参数个数、返回值其中有一个不同，就叫做函数重载）
function run(arg:string):void
function run(arg:number, arg2:string):void
function run(arg:boolean):void
function run(arg1: any, arg2: any): any {
  // 在这个方法体，要考虑实现上面所有的方法
}
