import React, { Component } from 'react'
import { connect } from 'dva'
import TodoItem from './TodoItem'

export class TodoBody extends Component {
  constructor(props) {
    super(props)

    this.props.dispatch({
      type: 'todo/fetchTodos'
    })
  }

  render() {
    const { todos } = this.props
    return (
        <ul>
            {
              todos.map((todo, index) => {
                return <TodoItem key={index} todo={todo} deleteFunc={this.deleteHandler.bind(this)}/>
              })
            }
        </ul>
    )
  }

  deleteHandler(todo) {
    this.props.dispatch({
      type: 'todo/deleteTodo',
      payload: {
        todo,
      }
    })
  }
}

const mapStateToProps = (state) => {
  const { todos } = state.todo
  return {
    todos,
  }
}
export default connect(mapStateToProps)(TodoBody)
