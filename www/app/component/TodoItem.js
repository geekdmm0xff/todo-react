import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  render() {
    const {title, done, id} = this.props.item
    return (
      <li>
        <input type="checkbox" checked={done}/>
        <span>{title}</span>
        <button onClick={() => (this.handDelete())}>删除</button>
      </li>
    )
  }

  handDelete() {
    this.props.deleteFunc(this.props.item.id)
  }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    deleteFunc: PropTypes.func.isRequired,
}
