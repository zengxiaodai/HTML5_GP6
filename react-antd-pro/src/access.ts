/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
// 这是umi提供的路由权限方案（会用）
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  console.log('currentUser', currentUser)
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    // canEditor: currentUser && currentUser.access === 'editor'
  }
}
