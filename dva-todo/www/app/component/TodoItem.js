import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onEdit: false,
    }
  }

  render() {
    const { todo: {id, title, done}, deleteFunc } = this.props
    const { onEdit } = this.state
    console.log('item:', this.props)
    return (
        <li>
          {
            !onEdit ?
            (<span>
              <label>{title}</label> 
              <button onClick={() => { deleteFunc(this.props.todo) }}>删除</button>
            </span>)
            :
            <input type="text" value={title}/>
          }
          
        </li>
    )
  }

}
