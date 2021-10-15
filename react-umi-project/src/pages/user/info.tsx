import { useParams } from 'umi'

export default () => {
  const { id } = useParams()
  return (
    <div>
      <h1>用户详情</h1>
      <h1>{id}</h1>
    </div>
  )
}
