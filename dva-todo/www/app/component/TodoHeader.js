import React, { Component } from 'react'
import { connect } from 'dva'

export class TodoHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    const { input } = this.state
    return (
      <div>
        <input type="text" value={input} onChange={(e) => { this.inputHandler(e) }}/>
        <button onClick={() => { this.commitHandler() }}>增加</button>
      </div>
    )
  }

  inputHandler(e) {
    this.setState({
      input: e.target.value,
    })
  }

  commitHandler() {
    this.props.dispatch({
      type: 'todo/addTodo',
      payload: {
        title: this.state.input,
      }
    })
  }
}


export default connect()(TodoHeader)
