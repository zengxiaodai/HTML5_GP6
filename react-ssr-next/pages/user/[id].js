import { useRouter } from 'next/router'

export default function UserDetail() {
  const router = useRouter()
  console.log('router', router)
  return (
    <div>
      <h1>用户详情页{router.query.id}</h1>
    </div>
  )
}
