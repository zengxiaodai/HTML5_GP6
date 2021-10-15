import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
import UserList from './routes/user/UserList'
import UserInfo from './routes/user/UserInfo'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/user/list" exact component={UserList} />
        <Route path="/user/info/:id" exact component={UserInfo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
