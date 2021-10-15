// 自定义Hooks：使用useState、useEffect、useCallback、其它任意可用的Hooks Api来封装自己的use*系列函数。

import { useEffect } from 'react'

function useTitle(title) {
  useEffect(()=>{
    document.title = title || '千锋'
  }, [])
}

export default useTitle
