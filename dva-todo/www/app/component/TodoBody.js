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
                return (
                  <TodoItem 
                    key={index} 
                    todo={todo} 
                    deleteFunc={this.deleteHandler.bind(this)}
                    updateFunc={this.updateHandler.bind(this)}
                  />
                )
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

  updateHandler(todo) {
    this.props.dispatch({
      type: 'todo/updateTodo',
      payload: {
        todo,
      }
    })
  }
}

const mapStateToProps = (state) => {
  const { todos, show } = state.todo
  return {
    show,
    todos: (function() {
      if (show === 'only-done') {
        return todos.filter(todo => todo.done)
      } else if (show === 'onlu-undone') {
        return todos.filter(todo => !todo.done)
      } else {
        return todos
      }
    })()
  }
}
export default connect(mapStateToProps)(TodoBody)
