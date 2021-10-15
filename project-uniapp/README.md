# APP开发技术栈


#### 一、原生APP开发（学习成本）（2008--2012）

- IOS         OC
- Android     Java

#### 二、跨平台APP开发

- 理解：只使用前端技术做APP（一套代码，在多个平台上运行，比如Andriod平台、IOS平台。）
- 强调：在跨平台App技术中，都有原生APP，比如拍照、扫码、访问手机、定位。。。。。。

	Ionic / html5 plus / phonegap  2013---2016

	taro     它可以打包成RN     微信小程序
	react-native    2015---2018  国内（）
	uniapp     2018---2021      中小公司非常流行（android、小程序）
	fullter  编程语言Dart，大公司、外公司，真做APP

#### 三、混合开发（Hybrid）= 原生APP + Web H5

	理解：在Android/IOS的APP使用类似webview这个的组件嵌套H5页面。
	在混合开发前端H5用什么技术？jquery、vue、react、angular写H5页面（没有原生API的，做不了）。
	难点：
		原生和H5如何通信？（通常使用webview的url传参）
		在混合APP中难以识别“哪些页面是原生做的？”“哪些页面是H5做的？”（如果发现页面上原生功能，那么这个页面用原生写。如果发现页面很长、交互很复杂、样式花里胡哨的，你可以断定是H5的。）

	Hybrid APP：有些原生代码多、前端H5代码多。

自检：如果你发现APP中原生功能较多，简历上建议写成“跨平台APP”，技术栈RN、uniapp、Flutter（Tabbar、Navbar要自己写）。如果你发现APP中web页面较多，简历上建议写成“混合App”，技术栈vue全家桶、react全家桶（移动端web页面，可以不用考虑Navbar、Tabbar的编写）。


【原生App vs.  跨平台App vs. 混合App】优劣对比：

1、原生开发，至少得两套代码，成本高、开发周期长、复杂交互和样式开发麻烦；交互流畅、性能好、能够访问手机原生功能。
2、H5：交互可以做得非常精致、样式也可以精致；不擅长使用手机原生功能。
3、跨平台开发：一套代码运行在多个平台，开发周期短，成本低，招人好招。性能没那么好，卡顿、兼容性略微麻烦、不好做技术选型。
4、混合开发：两个壳子，成本没那么高，开发周期没那么长，性能良好，用原生可以访问手机功能，用H5可以做复杂交互和样式。原生和H5配合比较多。它是介于跨平台APP（或者H5）与原生开发之间的一种权衡方案。

# Uniapp详解

- 创建项目的两种方式：
	- 1、使用@vue/cli创建工程化项目，好处是可以使用命令行、可以使用npm安装各种第三方包。
	- 2、使用HBX创建项目，好处是拥有可视化的操作界面、不会出现各种丢包问题。

- uniapp开发范式
	- 基于配置的，类似微信小程序的配置风格、比如路由、tabbar、下拉刷新等。
	- uniapp可以使用HTML标签(尽量不使用)、uniapp内置组件、nvue组件、以有社区中第三方组件库。
	- uniapp没有vue-router，路由都是配置的。
	- uniapp中默认可以安装vuex，作为状态管理工具。
	- uniapp中的API，几乎和微信小程序中的API的风格相似（都是 uni.login）。如果uniapp只打包成一种平台，写代码不用考虑加“兼容性注释”；如果一开始产品就要求打包成多平台应用，一定要规范地写好“兼容性注释”。
	- [兼容性注释](https://uniapp.dcloud.io/platform?id=%e8%b7%a8%e7%ab%af%e5%85%bc%e5%ae%b9)
	- uniapp支持两种风格的生命周期：小程序生命周期、Vue生命周期。
	- 样式可以使用sass、less，但是需要安装支持CSS预处理器插件。在非脚手架的uniapp项目中如何安装第三方插件呢？
		- 1、在DCloud官网上注册企业级账号、认证。
		- 2、在HBX中登录账号。
		- 3、在菜单栏上“工具”->“插件安装”->进入到DCloud插件市场->找到要用的插件->“在HBX中安装”。
	- 样式的默认使用 rpx，满屏是 750rpx。
	- 当我们写uniapp界面时，需要在浏览器中查看效果。如何改端口和本地跨域代理呢？在manifest.json中对"h5"进行配置。
	- 在uniapp中默认就支持 '@/utils' 这种绝对路由。
	- 在uniapp自定义组件，参考vue语法，不要使用小程序自定义组件的那种风格。

# WebView详解

- 什么混合开发（Hybrid APP）？在Android/IOS原生App中使用相关组件嵌套H5移动端页面。在当下前端技术中，比如uniapp、rn、小程序、taro中都有了web-view组件，用于支持跨平台APP的混合开发（换句说就是在跨平台App中嵌入H5页面）。
- 为什么要使用混合开发？
	- 快速开发，把APP中交互复杂、样式复杂的页面抽离成H5页面，节省成本、节省开发时间。
	- 直接显示网络H5页面（比如掘金宝APP）。
- web-view嵌套H5页面，一种是本地文件，一种线上文件。
	- 说明：公司中一般嵌套网络的H5页面。
- APP和webview的通信
	- url传参（query传参）`<web-view src='http://m.3fengs.com?id=20'/web-view>`
	- 通过自定义封装message/onPostMessage事件来监听H5页面返回的消息。

# uniapp调试

- 有一个硬件设备（比如手机）
- 安装这个硬件所对应的软件驱动（比如华为手机驱动）
- 使用USB线进行连接（开启USB调试、打开开发者选项）
- 在HBX中上，“运行” ->“运行到真机”进行调试

# uniapp打包上线的流程

- 在电脑上安装JRE环境（安装JRE8）
	- Java下载：`https://www.oracle.com/technetwork/java/javase/downloads/index.html`
	- 配置java环境变量
- 生成android签名证书（按照公司营业执照来填写）
	```
	keytool -genkey -alias gp6 -keyalg RSA -keysize 2048 -validity 36500 -keystore gp6.keystore
	```
- 在HBX中，选择“发行”->“原生App云打包”->进入一个信息填写界面，输入证书名称、证书口令、上传证书文件->提交云打包。如果报错，根据错误在HBX的 manifest.json 中进行若干配置。
- DCloud官方云打包成功后，“发行”->“查看云打包状态”，如果成功了会有一个下载.apk包的链接。

# 单点登录（Single Sign ON = SSO）

- 常用的登录鉴权方式：cookie/session，token，oAuth第三方登录。
- 概念：在一套应用程序中，有一个地方登录过，其它应用中可以直接访问（无须登录）。
- 实现：在服务器上构建一台“认证服务器”，至少得用一个登录页面，还有生成token、验证token的功能。
- 意义：举一个例子，比如公司里有一个很大的管理系统，因为系统太大不利于维护和开发，通常会把一个大系统拆分成多个子系统，这时就要用到“SSO”，方便用于在多个子系统（APP）之间进行切换。
- 参考案例：https://login.oracle.com/mysso/signon.jsp
- 学习资源：https://www.zhihu.com/question/342103776/answer/798611224
