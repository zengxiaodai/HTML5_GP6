import React from 'react'

export default props => {
  let { match } = props
  return (
    <div>
      <h1>用户详情</h1>
      <h1>{match.params.id}</h1>
    </div>
  )
}
