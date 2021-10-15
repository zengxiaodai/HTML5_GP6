import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins 使用并注册第三方插件
// app.use({});

// 3. Model 集成redux状态管理
app.model(require('./models/user').default);

// 4. Router 集成react-router路由
app.router(require('./router').default);

// 5. Start 启动dav项目
app.start('#root');
