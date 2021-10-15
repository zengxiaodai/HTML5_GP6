var msg: string = 'hello world'
var age: number = 100
var bol: boolean = true

var list1: Array<number> = [1,2,4,9]
var list2: string[] = ['a','b','c']
var list3: Array<any> = [true,false,1,'2']
var list4: ReadonlyArray<any> = [1,2,3,4]
// list4[0] = 1000

var tup1: [string,number] = ['hello', 100]
tup1[0] = 'world'

enum Cate {
  office = '办公用品',
  car = '汽车生活',
  clothe = '男装女装'
}
console.log(Cate.office)

enum Color {
  red,
  green,
  blue
}
console.log(Color[0])

{
  const name: any = 'Lucy'
}

var info: object = {
  user: 'Lucy',
  age: 30
}

// void、unidefined、null、never

type User = {
  user: string,
  age: number,
  addr: string,
  children: Array<string>,
  // 可选属性
  avatar?: string,
  // 自定义属性
  readonly id: string,
  [propName:string]?: string
}
var u1: User = {
  user: 'zhangsan',
  age: 100,
  addr: '深圳',
  children: ['lisi','wangwu'],
  avatar: '',
  id: '44444444'
}

interface Info {
  name: string,
  age?: number
}
var i1: Info = {
  name: 'zhangsan',
  age: 100
}

// 类型联合（使用 type 关键字定义的类型，可以进行“类型联合”）
type AA = number | string | boolean | User | Array<number>
const aa: AA = [1,2,3,4]

type B1 = {
  name: string
}
type B2 = {
  age: number
}
type B3 = {
  addr?: string
}
// 类型交叉（使用 type 关键字定义的类型，可以进行“类型交叉”）
type BB = B1 & B2 & B3
const bb: BB = {
  name: 'zhangsan',
  age: 100
}

const cc: number = 200
const l1: number = (<string>cc).length
const l2: number = (cc as string).length

// type定义的类型，可以进行类型交叉和类型联合。
// interface定义的类型，不能进行交叉和联合。
