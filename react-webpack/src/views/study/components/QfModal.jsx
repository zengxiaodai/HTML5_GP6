import React from 'react'
import './style.scss'

// 组合模式
// 语法基础：
  // props.childen
  // render props(使用组件时props可以传递ReactNode、参与组件的视图渲染)

// 如果使用继承来实现Modal的封装？
// class Modal extends React.Component {}  // 基准
// class ModalWithHeader extends Modal {}  // 带有Header的弹框
// class ModalWithoutHeader extends Modal {}
// class DeleteModalWithHeader extends ModalWithHeader {}

// 使用组合来封装组件？
// 首先要拆解出多个维度：大小尺寸(2)、弹框类型(delete/confirm/warn)(4)、结构(2)、功能(1)、render-props(2*2)

const ModalHeader = props =>{
  let { isHeader, title, closable, close, closeIcon } = props
  return (
    isHeader &&
    <div className='header'>
      <span>{title||'标题'}</span>
      {
        (!(closable===false))
        &&
        <span
          className='close'
          onClick={close}
        >
        { closeIcon || 'X' }
        </span>
      }
    </div>
  )
}

const ModalFooter = props => {
  let { type } = props

  const ConfirmBtn = <span className='confirm' key='1'>确定</span>
  const CancelBtn = <span className='cancel' key='2'>取消</span>
  const DeleteBtn = <span className='delete' key='3'>删除</span>

  let res = []
  switch (type) {
    case 'confirm':
      res = [ConfirmBtn, CancelBtn]
      break
    case 'delete':
      res = [DeleteBtn, CancelBtn]
      break
    default:
      res = [CancelBtn]
  }
  return res
}

export default props => {
  console.log('props')
  let {
    children,
    visible,     // 控制弹框的显示与隐藏
    onCancel,    // 点击遮罩层或右上角叉或取消按钮的回调
    afterClose,
    closable,
    closeIcon,
    footer,
    maskClosable,
    okText,
    title,
    width,
    type,
  } = props

  const isHeader = (!['confirm','delete','warn','info'].includes(type))

  const close = e => {
    e.stopPropagation()
    // do something
    console.log('close')
    new Promise(resolve=>{
      onCancel && onCancel()
      resolve()
    }).then(()=>{
      afterClose && afterClose()
    })
  }

  const closeLayer = (e)=> {
    if(!(maskClosable===false)) {
      close(e)
    }
  }

  const closeLayerESC = e => {
    console.log('esc e', e.keyCode)
  }

  return (
    <div
      className='qf-modal-layer'
      style={{display: visible?'block':'none'}}
      onClick={e=>closeLayer(e)}
      onKeyDown={closeLayerESC}
      tabIndex={1}
    >
      <div
        className='modal'
        style={
          (()=>{
            // do something
            const w = isHeader ? (width||520) : 420
            return {
              width: `${w}px`,
              marginLeft: `-${w/2}px`
            }
          })()
        }
      >
        <ModalHeader {...props} isHeader close={close} />
        <div className='body'>
          { children }
        </div>
        {
          (!footer) &&
          <div
            className='footer'
            style={{borderTop: isHeader?'1px solid #ccc':'none'}}
          >
            <ModalFooter {...props} />
          </div>
        }
      </div>
    </div>
  )
}
