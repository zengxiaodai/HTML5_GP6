import React from 'react'

import PanelA from './components/PanelA'
import PanelB from './components/PanelB'
import PanelC from './components/PanelC'
import PanelD from './components/PanelD'

import './style.scss'

export default () => {
  return (
    <div className='qf-study-redux'>
      <div>
        <PanelA />        
        <PanelB />
      </div>
      <div>
        <PanelC />
        <PanelD />
      </div>
    </div>
  )
}
