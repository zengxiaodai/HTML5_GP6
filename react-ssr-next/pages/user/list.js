import { useRouter } from 'next/router'

export default function List() {
  const router = useRouter()
  return (
    <div>
      <h1 onClick={()=>router.push('/user/1')}>第一个用户</h1>
      <h1>第二个用户</h1>
    </div>
  )
}
