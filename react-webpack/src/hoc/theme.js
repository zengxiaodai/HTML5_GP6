import React from 'react'
import ThemeCtx from '@/utils/theme'

export default function(WrappedComponent) {
  return props =>(
    <ThemeCtx.Consumer>
    {
      theme => (
        <div style={theme}>
          <WrappedComponent {...props} theme={theme} />
        </div>
      )
    }
    </ThemeCtx.Consumer>
  )
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: '100px',
    left: 0,
    right: 0,
  }
}
