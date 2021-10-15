import { useState, useEffect } from 'react'

export default () => {
  const [role, setRole] = useState('')
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setRole('amdin')
    }, 1000)
    return ()=>clearTimeout(timer)
  }, [])
  return role
}
