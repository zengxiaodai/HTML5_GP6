import React from 'react'

// 使用这个第三方包来做props类型验证（是否必填、数据类型）
import PropTypes from 'prop-types'

// { color, background }
const ThemeToggle = ({ value, onChange }) => {
  const change = (e, k) => {
    onChange && onChange({
      ...value,
      [k]: e.target.value
    })
  }
  return (
    <div className='qf-theme-toggle'>
      <span>前景色:</span>
      <input
        type='color'
        value={value.color}
        onChange={e=>change(e, 'color')}
      />
      <span>背景色:</span>
      <input
        type='color'
        value={value.background}
        onChange={e=>change(e, 'background')}
      />
    </div>
  )
}

// 使用PropTypes对每一个props进行验证
ThemeToggle.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  a: PropTypes.string,
  b: PropTypes.oneOf(['car', 'office']),
  c: PropTypes.node
}

export default ThemeToggle
