import React, { useMemo } from 'react'
import { useAppSelector } from '@/hooks'

import HomeAdmin from './HomeAdmin'
import HomeEditor from './HomeEditor'

export default () => {
  const u:any = useAppSelector(({user})=>user.user)
  const dash = useMemo(()=>{
    let result: any = null
    switch (u.roleName) {
      case 'admin':
        result = <HomeAdmin/>
        break
      case 'editor':
        result = <HomeEditor/>
        break
      default:
    }
    return result
  }, [u])

  return (
    <div>
      { dash }
    </div>
  )
}
