import React from 'react'
import config from '@/utils/config'

export default function(WrappedComponent) {
  return props => {
    return (
      <WrappedComponent {...props} config={config} />
    )
  }
}
