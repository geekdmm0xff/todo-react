import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { bindActionCreators } from 'redux';
import * as todoActions from '../action/todoActions'

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
              />
            })
          }
        </ul>
      </div>
    )
  }

  deleteTodo(id) {
    this.props.actions.postDeleteTodo(id)
  }

  checkedTodo(item) {
    console.log("p:", item)
    this.props.actions.postCheckedTodo(item)
  }
}

const mapStateToProps = (state) => {
  return ({
    todos: state.todoReducer.todos,
  })
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoBody)
