import React from 'react'
import CheckBox from './components/CheckBox'

// 表单绑定
// 在vue中表单是双向绑定的(v-model)；在react中表单是单向绑定的。
// 怎么理解表单的单向绑定？当state声明式变量更新时，react表单视图自动更新；react表单视图更新时，它所对应的声明式变量不更新，需要我们手动绑定onChange事件来取值。

// 受控表单(受控组件)：表单(类表单)的value/checked的值由state变量控制。
// 非受控表单(非受控组件)：表单(类表单)的value/checked的值不被state变量控制。

// 结论：严格要求不要使用非受控表单，建议使用受控表单。有且仅有文件上传的表单不需要受控（React允许）。

let  mobile = ''
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      init_desc: '我是一个好人',
      desc: '',
      nick_name: '123',
      motto: '',
      gender: 'man',
      favList: [],
      level: '',
      fList: []
    }
  }

  // 手动取表单的值
  formChange (k, e) {
    switch (k) {
      case 'favList':
        if(e.target.checked) {
          this.setState(s=>({favList: [...s.favList, e.target.value]}))
        }else{
          this.setState(s=>({favList: s.favList.filter(ele=>ele!==e.target.value)}))
        }
        break
      case 'fList':
        this.setState({fList: e})
        break
      default:
        this.setState({[k]: e.target.value})
    }
  }

  submit() {
    const data = {
      name: document.getElementById('name').value,
      age: this.refs.age.value,
      mobile,
      desc: this.state.desc,
      init_desc: this.state.init_desc,
      nick_name: this.state.nick_name,
      motto: this.state.motto,
      gender: this.state.gender,
      favList: this.state.favList,
      level: this.state.level,
      fList: this.state.fList
    }
    console.log('提交', data)
  }

  render() {
    let { desc, init_desc, nick_name, motto, gender, favList, level, fList } = this.state
    const genderArr = [
      { id: 1, label: '男', value: 'man' },
      { id: 2, label: '女', value: 'female' },
      { id: 3, label: '保密', value: 'privary' }
    ]
    const favArr = [
      { id: 1, label: '乒乓球', value: 'ping-pong' },
      { id: 2, label: '游泳', value: 'swimming' },
      { id: 3, label: '足球', value: 'football' },
      { id: 4, label: '篮球', value: 'basketball' }
    ]
    const levelArr = [
      { id: 1, label: '高中', value: 'a' },
      { id: 2, label: '大专', value: 'b' },
      { id: 3, label: '本科', value: 'c' },
      { id: 4, label: '硕士', value: 'd' }
    ]
    return (
      <div>
        <h1>学习表单绑定</h1>

        {/* 以下表单都是非受控表单 */}
        <div>
          <span>姓名：</span>
          <input id='name' type="text"/><br/>

          <span>年龄：</span>
          <input ref='age' type="number"/><br/>

          <span>手机：</span>
          <input type="text" onInput={e=>mobile=e.target.value} />
          <br/>

          <span>简介：</span>
          {/*<input type="text" onInput={e=>this.state.desc=e.target.value}/>*/}
          {/*<input type="text" onInput={e=>this.setState({desc:e.target.value})}/>*/}
          <input
            type="text"
            defaultValue={init_desc}
            onInput={e=>this.setState({desc:e.target.value})}
          /><br/>

          <span>头像：</span>
          <input type="file"/><br/>
        </div>
        <br/>

        {/* 以下表单都是受控表单 */}
        <div>
          <span>昵称：</span>
          <input
            type="text"
            value={nick_name}
            onChange={e=>this.formChange('nick_name', e)}
          />
          <br/>

          <span>座佑铭：</span>
          <textarea value={motto} onChange={e=>this.formChange('motto', e)} />
          <hr/>

          <span>性别：</span>
          {
            genderArr.map(ele=>(
              <React.Fragment key={ele.id}>
                <input
                  type="radio"
                  value={ele.value}
                  checked={gender===ele.value}
                  onChange={e=>this.formChange('gender', e)}
                />
                <span>{ele.label}</span>
              </React.Fragment>
            ))
          }
          <br/>

          <span>爱好：</span>
          {
            favArr.map(ele=>(
              <React.Fragment key={ele.id}>
                <input
                  type="checkbox"
                  value={ele.value}
                  checked={favList.includes(ele.value)}
                  onChange={e=>this.formChange('favList', e)}
                />
                <span>{ele.label}</span>
              </React.Fragment>
            ))
          }
          <hr/>

          <span>学历：</span>
          <select value={level} onChange={e=>this.formChange('level', e)}>
          {
            levelArr.map(ele=>(
              <option
                key={ele.id}
                value={ele.value}
              >
                {ele.label}
              </option>
            ))
          }
          </select>
          <br/>

          <span>爱好：</span>
          <CheckBox inline data={favArr} value={fList} onChange={e=>this.formChange('fList', e)} />


        </div>


        <button onClick={()=>this.submit()}>提交所有表单</button>

      </div>
    )
  }
}
