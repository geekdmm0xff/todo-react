import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('item:', this)
    const { id, title, done } = this.props.todo
    return (
        <li>{title}</li>
    )
  }
}
