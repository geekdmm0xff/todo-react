import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onEdit: false,
      input: this.props.todo.title,
    }
  }

  render() {
    const { todo: {id, title, done}, deleteFunc } = this.props
    const { onEdit, input } = this.state
    return (
        <li>
          {
            !onEdit ?
            (
            <span onDoubleClick={() => { this.doubleClickedHandler() }}>
              <input type="checkbox"/>
              <label>{title}</label> 
              <button onClick={() => { deleteFunc(this.props.todo) }}>删除</button>
            </span>
            )
            :
            <input 
            type="text" 
            value={input}
            onChange={(e) => { this.inputChangeHandler(e) }}
            onBlur={() => { this.inputBlurHandler() }}
            />
          }
        </li>
    )
  }

  doubleClickedHandler() {
    this.setState({
      ...this.state,
      onEdit: true,
    })
  }

  inputChangeHandler(e) {
    this.setState({
      ...this.state,
      input: e.target.value,
    })
  }

  inputBlurHandler() {
    this.props.updateFunc({
      ...this.props.todo,
      title: this.state.input,
    })
    
    this.setState({
      onEdit: false,
    })
  }
}
