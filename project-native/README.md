
# 一、RN简介

RN = ReactNative （Facebook出品）
RN 跨平台技术，做IOS App、Android App。
RN 一些有海龟背景的公司会用到

RN 本质上提供了两类组件：一类是移动端组件库、一类具有原生功能的API。

代码测试（仅学习语法使用）：https://snack.expo.dev/

RN开发准备工作：科学上网、Mac、Xcode、Android Stadio

# 二、沙盒搭建（expo环境）

cnpm i expo-cli -g
expo init rn-app
cd rn-app
expo start  // 在命令行控制台显示一个二维码
在手机上安装expo，扫码运行在expo  app中。


# 三、环境搭建（原生环境）

windows环境，只能打包 android app。
mac环境，可以做 android app、ios app。

重点说明在mac平台上如何搭建RN的开发环境：
1、搭建 android app 环境
	安装node（v12+）
	安装watchman（监听文件系统的变化）
	安装yarn
	安装JDK(1.9+)
	安装android studio（是谷歌提供的一个android app套件工具）
	安装android模拟器

2、搭建 ios app 环境
	安装node（v12+）
	安装watchman（监听文件系统的变化）
	安装yarn
	安装Xcode（是苹果电脑上的一个开发工具集）
	安装cocoapods（是苹果电脑上的一个包管理器）

# 项目创建

```
cnpm i react-native-cli -g
react-native init projectreactnative
```

- 会使用组件库布局、写样式、基本交互
- 会使用路由系统 react-navigation
- 会调接口fetch、会使用状态管理工具mobx、redux
- 会封装移动端组件

# RN 开发范式

- 样式
  - 单位只支持 px，不要用 rpx、rem这种东西。
  - 布局使用 flex 布局。
  - <Image source={} />
  - 背景图片使用 <ImageBackground />
  - 颜色名称和css中一样的

- 交互
  - 绑定事件 <View onPress></View>
  - RN还提供了一套交互事件的内置组件 <TouchableOpacity onPress></TouchableOpacity>

- 路由系统
  - React Navigation 这个路由导航模块已经独立出来的。
	- <TabNavigator> 创建底部Tabbar。
	- <StackNavigator> 创建页面路由栈。
  - 多Screen设计，路由跳转、路由传参。

- 混合开发（在RN App中打开H5页面）
	- 使用原生(android、ios)封装WebView组件，提供给RN使用。
	- 使用第三方库 react-native-webview
	- 使用第三方库 react-native-wkwebview-reborn
