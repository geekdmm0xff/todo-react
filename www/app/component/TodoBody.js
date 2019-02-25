import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

export class TodoBody extends Component {

  render() {
    const [...todos] = this.props.todos
    return (
      <div>
        <ul>
          {todos.map((item, index) => {
            return <TodoItem key={index} item={item}/>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ todoReducer }) => ({
  todos: todoReducer.todos,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoBody)
