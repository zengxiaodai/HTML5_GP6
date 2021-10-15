created at 2021-08-05 by gp6

- 环境搭建
```
cnpm i create-react-app -g
create-react-app react-admin --template typescript
cd react-admin
npm start
```

- 文件命名：
  - .js / .jsx / .ts / .tsx
  - 如果代码用到了JSX变量，文件名用.jsx或.tsx。
  - 如果代码没有用到JSX，文件名用.js或.ts。

- TypeScript
  - 它是JS的超集，在TS环境可以兼容JS代码（也就是你说可以ES5、ES6代码）
  - 在脚手架环境中（node+webpack），还做不到实时地对TS类型进行检测。但每次运行项目时，却可以做到对代码的检测。
  - 所以在工作中，TS项目几乎都用的是VScode来做开发（因为VScode这个编辑器内置了TS检测工具）。
  - VScode只能.ts/.tsx文件进行类型检测。不能在.js/.jsx中写TS代码。
  - 如何理解TS报红的错误？它只是提示你类型错误了，但不影响代码的正确编译和运行。

```
create-react-app react-admin --template redux-typescript
```


# create-react-app
```
# ES6环境（只能使用ES6语法、默认不支持TS，使用redux、react-redux）
# 定义redux时，参考store_backup代码
# 使用redux数据时，可以用connect、useSelector、useDispatch
create-react-app my-app1

# TS环境（TS和ES6都可以使用、在这个环境使用redux、react-redux传统流程）
create-react-app my-app2 --template typescript

# TS环境（只使用TS，在这个环境中使用 @reduxjs/toolkit、react-redux）
create-react-app my-app3 --template redux-typescript
```

简单描述Redux传统流程：
- 安装redux，使用createStore(rootReducer、initState、middleWares)创建根store
- 使用combineReducers({}) 合并多个子reducer
- 使用compose(applyMiddleWare(thunk), applyMiddleWare(logger))使用中间件，尤其是解决redux不支持异步action的问题。
- 如何创建子reducer呢？function reducer(initState,aciton) {本质上是一堆switch语句}，在编写子reducer时，核心逻辑是深复制（immer），根据不同的case分支来修改子store（action={type,payload}是信号，像一封邮件）
- 在App.jsx中，安装react-redux这个库，使用 <Provider store></Provider>，React组件树中有了store上下文。
- 在React组件中，如果是16.8以前，只能使用 connect(mapState, mapDispatch)(Component)，然后在props上就能访问这些store数据、以及那些修改store的action逻辑。
- 在React组件中，如果是16.8以后，除了connect可以用，建议使用更好的 useDispatch、useSelector。
- 在传统的redux架构中，为了让action更好地维护和复用，我们一般建议封装action生成器方法。
- 在传统的redux架构中，为了避免协同开发时大家滥用type或者type冲突，我们一般建议封装一个type字典。

简单@reduxjs/toolkit的流程：
- 安装@reduxjs/toolkit这个库，使用configureStore({reducer,middleware})创建store。
- 使用createSlice({name,initialState,reducers,extraReducers})创建子reducer，最后抛出子reducer给根store合并。
- 使用createAsyncThunk('user/login', async (入参)=>(await fetchLogin()))，给到createSlice.extraReducers中addCase添加异步成功状态，在成功状态中直接修改子store。这些由createAsyncThunk创建action方法，也要抛出，给React组件进行触发使用 dispatch(login(入参))。
- 在App中，安装react-redux，使用<Provider store></Provider>注入上下文。
- 在React组件中，只能使用 @reduxjs/toolkit官方推荐的 useAppSelector来使用store数据、只能使用useAppDispatch来触那些子store中抛出的action。


# 可视化开发

- 二维图表
- 基于地图的开发：百度地图、高德地图、腾讯地图、谷歌地图
- 三维视觉

- bizcharts 这是React版本的antv图表（组件化写法，要求会用）
- ant-design-charts 自己做一些补充
- echarts 是百度出品的可视化基础库（DOM写法，要求会用）

- antv 是阿里出品的可视化基础库（使用难度较大，不建议使用）
- highcharts 是国外开源的一个可视化基础库（仅做了解）
