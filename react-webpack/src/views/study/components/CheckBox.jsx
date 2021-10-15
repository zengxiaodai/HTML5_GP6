import React from 'react'
const { Component } = React

// data: Array<object>
// onChange: ()=>()
// value: Array<string>  favList
// inline: boolean
class CheckBox extends Component {
  change (e) {
    const checked = e.target.checked
    const value = e.target.value
    let result = []
    if(checked) {
      result = [...this.props.value, value]
    }else{
      result = this.props.value.filter(ele=>ele!==value)
    }
    this.props.onChange(result)
  }
  render() {
    let { data, value } = this.props
    data = data || []
    value = value || []
    return (
      <div>
        {
          data.map(ele=>(
            <span key={ele.id}>
              <input
                type="checkbox"
                value={ele.value}
                checked={value.includes(ele.value)}
                onChange={e=>this.change(e)}
              />
              <span>{ele.label}</span>
            </span>
          ))
        }
      </div>
    )
  }
}

export default (props)=> {

  const change = e => {
    const checked = e.target.checked
    const value = e.target.value
    let result = checked ? [...props.value, value] : props.value.filter(ele=>ele!==value)
    props.onChange && props.onChange(result)
  }

  return (
    <div style={{display:props.inline?'inline-block':'block'}}>
      {
        (props.data||[]).map(ele=>(
          <span key={ele.id}>
            <input
              type="checkbox"
              value={ele.value}
              checked={(props.value||[]).includes(ele.value)}
              onChange={change}
            />
            <span>{ele.label}</span>
          </span>
        ))
      }
    </div>
  )
}
