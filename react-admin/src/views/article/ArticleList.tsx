import React, { useState, useEffect, useMemo } from 'react'
import { Row, Col, Input, Table, Button, DatePicker, ColumnType } from 'antd'
import { ArticleCateSelect } from '@/components'
import { getArticleList, ArticleItem } from '@/store/reducers/article'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useHistory } from 'react-router-dom'
import img from '@/utils/img'
import './style.scss'
import moment from 'moment'

const { RangePicker } = DatePicker

export default () => {

  const history = useHistory()

  const dispatch = useAppDispatch()
  const total = useAppSelector(state=>state.article.total)
  const articleList = useAppSelector(state=>state.article.articleList)
  const cateList = useAppSelector(state=>state.article.cateList)

  const [date, setDate] = useState([])

  const [filter, setFilter] = useState({
    title: '',
    cate: '',
    page: 1,
    size: 2,
    start_time: 0,
    end_time: 0
  })

  useEffect(()=>{
    dispatch(getArticleList(filter))
  }, [filter])

  const searchChange = e => {
    if (e.target.value.trim() === '') {
      setFilter({...filter, title: ''})
    }
  }

  const dateChange = e => {
    if(e && e.length===2) {
      console.log('start_time', e[0].format('YYYY-MM-DD HH:mm:ss'))
      console.log('start_time', e[0].valueOf())
      console.log('end_time', e[1].format('YYYY-MM-DD HH:mm:ss'))
      console.log('start_time', e[1].valueOf())
      setDate(e)
      setFilter({...filter, start_time: e[0].valueOf(), end_time: e[1].valueOf()})
    }else{
      setDate([])
      setFilter({...filter, start_time: 0, end_time: 0})
    }
  }

  const columns: ColumnType<ArticleItem> = useMemo(()=>(
    [
      {
        title: '序号',
        dataIndex: 'id',
        align:'center',
        render: (text, row, idx) => (<span>{idx}</span>)
      },
      {
        title: '作者',
        align:'center',
        dataIndex: 'author'
      },
      {
        title: '标题',
        align:'center',
        dataIndex: 'title',
        render: (t,row)=>(
          <div className='info'>
            <img src={img.imgBase+row.img} alt="qf"/>
            <span>{row.title}</span>
          </div>
        )
      },
      {
        title: '类别',
        align:'center',
        dataIndex: 'cate',
        render: c=>(
          (cateList.length>0) && cateList.filter(ele=>ele.cate===c)[0].cate_zh
        )
      },
      {
        title: '发布时间',
        align:'center',
        dataIndex: 'create_time',
        sorter: (a,b)=>(a.create_time-b.create_time),
        render: (t)=>{
          return (
            <>
              <div>{moment(t).format('M月D日')}</div>
              <div>{moment(t).format('H:m')}</div>
            </>
          )
        }
      },
      {
        title: '状态',
        dataIndex: 'check_status',
        align:'center',
        render: (s)=>(s?'已发布':'待审核')
      },
      {
        title: '操作',
        align:'center',
        dataIndex: 'handle',
        render: (handle,row)=>(
          <>
            <Button
              type='primary'
              size='small'
              onClick={()=>history.push('/article/edit/'+row._id)}
            >
              编辑
            </Button>
            <Button style={{marginLeft:'10px'}} danger size='small'>删除</Button>
          </>
        )
      }
    ]
  ), [cateList])

  return (
    <div className='qf-article-list'>
      <div className='qf-filter'>
        <Row align='middle'>
          <Col span={2}>
            <span className='label'>标题:</span>
          </Col>
          <Col span={4}>
            <Input
              allowClear
              placeholder="文章标题"
              onChange={searchChange}
              onPressEnter={e=>setFilter({...filter, title:e.target.value, page:1})}
            />
          </Col>
          <Col span={2}>
            <span className='label'>类别:</span>
          </Col>
          <Col span={4}>
            <ArticleCateSelect
              allowClear
              value={filter.cate}
              onChange={cate=>setFilter({...filter, cate, page:1})}
              showAll
            />
          </Col>
          <Col span={2}>
            <span className='label'>日期:</span>
          </Col>
          <Col span={8}>
            <RangePicker value={date} onChange={dateChange} />
          </Col>
        </Row>
      </div>
      <div className='qf-table'>
        <Table
          rowKey='_id'
          columns={columns}
          dataSource={articleList}
          pagination={{
            total,
            current: filter.page,
            defaultPageSize: filter.size,
            pageSizeOptions: ['2','5','10','20'],
            showTotal: (total,range)=>{
              return <div>第{range[0]}-{range[1]}条/总共{total}条</div>
            },
            size: 'small',
            showQuickJumper: true,
            showSizeChanger: true,
            onChange: (page,size)=>setFilter({...filter, page, size:(size||filter.size)})
          }}
        />
      </div>
    </div>
  )
}
