import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useTitle, useTheme, useRole } from '@/hooks'
import { useList } from 'react-use'

// React中两种组件的定义方式

// 一、类组件
// 特性：this、生命周期、上下文、有state、有ref。。。
// 缺点：相比函数式组件，其运行速度较慢

// 二、函数式组件（无状态组件）
// 常识：函数式组件一直都有，不是16.8这个版本新增的。
// 问题：既然函数式组件运行速度快，但是没有类组件的特性，那么开发就比较麻烦(经常需要在类组件和函数式组件之间进行代码编写的切换)？
// 方案：在React 16.8这个版本新增了一些Hooks API。这些Api可以帮助我们在函数式组件中模拟出类组件的若干特性。这样一来，就不需要在类组件和函数式组件之间进行复杂的代码编写切换。

// Hooks API简介（只能用在函数式组件中）

// 1、useState
  // 语法：const [xx, setXX] = useState(初始值)

// 2、useEffect
  // 什么是Effect副作用？比如定时器、DOM操作、DOM渲染、调接口、长连接。。。
  // 标准语法：useEffect(()=>{return ()=>{}}, [响应式变量列表])
  // 特点：在同一个函数式组件中，可以使用多个useEffect来执行多个副作用。但是，建议一个useEffect只做一个副作用。这样的好处是把数据和业务逻辑剥离开来、便于代码的维护。

// 3、useContext
  // 语法：const cxt = useContext(上下文对象)

// 4、useCallback
  // 语法：const memoFn = useCallback(fn, [响应式变量列表])
  // 作用：缓存一个函数声明

// 5、useMemo
  // 语法：const memoVal = useMemo(fn, [响应式变量列表])
  // 作用：缓存一个复杂的运算结果

// 6、useRef
  // 语法：const refVal = useRef(null)
  // 使用：在jsx元素上<div ref={refVal}></div>，代码中refVal.current就是DOM对象

// useLayoutEffect 支持同步的Effect运行
// useReducer 使用redux

// 7、自定义Hooks

export default (props) => {
  // 使用useState在React响应式系统中定义了一个声明式变量
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])
  const [num, setNum] = useState(0)


  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')

  const refVal = useRef(null)

  const theme = useTheme()
  useTitle('好程序员')
  const role = useRole()
  const [userArr, setUserArr] = useState(
    [
      { id: 1, name: 'lisi-1', age: 10 },
      { id: 2, name: 'lisi-2', age: 20 },
      { id: 3, name: 'lisi-3', age: 30 },
      { id: 4, name: 'lisi-4', age: 40 }
    ]
  )
  const [listRef, listAct] = useList(userArr)

  // console.log('每次都执行')

  // useEffect的完整语法（研究运行机制）
  useEffect(()=>{
    // do something
    // 相当于类组件的componentDidMount()
    console.log('mounted')
    return ()=>{
      // do something
      // 相当于类组件的componentWillUnmount()
      console.log('beforeDestroy')
    }
  }, [])
  // [] 相当于是类组件的componentDidUpdate()

  useEffect(()=>{
    // 无须清除的副作用
    const oBox = document.getElementById('box')
    oBox.innerText = '我是动态的文本'
    oBox.style.color = 'red'
  }, [])

  useEffect(()=>{
    // 需要清除的副作用
    var timer = setInterval(()=>{
      // console.log('-------timer')
      setNum(num+1)
    }, 1000)
    return ()=>{
      // 对需要清除的副作用进行清除
      clearInterval(timer)
    }
  }, [num])

  // 类似vue中的计算属性，初始化会计算第一次
  // 有且仅有当数组中的声明式变量发生变化时，才会再次计算
  const full = useMemo(()=>{
    console.log('风吹草动')
    // do something
    return first+last
  }, [first, last])

  // 用于缓存一个函数声明，初始化时会声明一次
  // 有且仅有当数组中的声明式变量发生变化时，才会重新声明
  const handle = useCallback(()=> {
    // do something
    console.log('handled')
    refVal.current.style.color = 'red'
  }, [])

  const handleUserArr = ()=> {
    // 插入数据
    listAct.insertAt(1, { id: Date.now(), name: 'zhangsan', age: 50})
    console.log('insertAt')
  }

  return (
    <div>
      <h1>学习Hooks</h1>
      <hr/>

      <h1>{count}</h1>
      <button onClick={()=>setCount(count-1)}>自减</button>
      <button onClick={()=>setCount(count+1)}>自增</button>
      <hr/>

      { list.map(ele=>(<div key={ele}>{ele}</div>)) }
      <button onClick={()=>setList([...list, Date.now()])}>添加一个时间戳</button>
      <hr/>

      <h2 id='box'></h2>
      <hr/>

      <h2>{num}</h2>
      <hr/>

      <span>First Name: </span>
      <input type="text" value={first} onChange={e=>setFirst(e.target.value)} />
      <br/>
      <span>Last Name: </span>
      <input type="text" value={last} onChange={e=>setLast(e.target.value)} />
      <br/>
      <h1>{full}</h1>
      <hr/>

      <h1 ref={refVal}>一行文字</h1>
      <button onClick={handle}>改变文字颜色</button>
      <hr/>

      <h1>我的角色是：{role}</h1>
      <hr/>

      <div>
      {
        userArr.map(ele=>(
          <div key={ele.id}>
            <span>{ele.id}</span>
            <span>--{ele.name}</span>
            <span>--{ele.age}</span>
          </div>
        ))
      }
      </div>
      <button onClick={handleUserArr}>插入一个用户</button>

    </div>
  )
}
