# umi project

- umi，阿里系开源一个基于antd的生态脚手架，可以非常快捷地搭建管理系统。
- 最大的特色：基于配置的脚手架，没有入口文件，目录结构和目录命名都有严格的要求。
- umi项目有两种配置方式：
  - .umirc.ts  这是umi脚手架的默认配置方式
  - config/index.ts  这种配置的优先级更高
  - 参考umi的配置文件，路由模式配置、代理配置、layout配置、immer配置、routes配置。
- 坑：在最新的umi中，@umijs/preset-react 已经包含过 dva包、layout包，无须再安装。
- 路由配置两种方式：约定式路由（_layout.tsx），配置式路由（参见配置文件中的routes）
  - import { history, useHistory, useParams } from 'umi'
- 使用redux和redux-saga：
  - 在最新的umi中，不用再安装 @umijs/plugin-dva 这个包。
  - 在配置文件中，添加 dav: {immer: true }
  - 新建 src/models/user.ts 编写model代码，参见redux-saga的文档。
  - 在组件中，使用 import { connect, useSelector, useDispatch } from 'umi'
- umi 背后的构建工具是webpack v4，默认已经集成了 antd 。
