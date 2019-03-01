import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

export class TodoBody extends Component {

  render() {
    const [...todos] = this.props.todos
    return (
      <div>
        <ul>
          {
            todos.map((item, index) => {
              return <TodoItem 
              key={index} 
              item={item} 
              deleteFunc={this.deleteTodo.bind(this)}
              checkedFunc={this.checkedTodo.bind(this)} 
              updatedFunc={this.updateTodo.bind(this)}
              />
            })
          }
        </ul>
      </div>
    )
  }

  deleteTodo(id) {
    // this.props.actions.postDeleteTodo(id)
  }

  checkedTodo(item) {
    // this.props.actions.postCheckedTodo(item)
  }

  updateTodo(item) {
    // this.props.actions.postUpdateTodo(item)
  }
}

const mapStateToProps = (state) => {
  return ({
    todos: (function() {
      let todos = state.todoReducer.todos
      if (state.todoReducer.showType === 'only-done') {
        return todos.filter(todo => todo.done)
      } else if (state.todoReducer.showType === 'only-undone') {
        return todos.filter(todo => !todo.done)
      } else {
        return todos
      }
    }()),
  })
}

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoBody)
