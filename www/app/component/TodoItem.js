import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  render() {
    const {title, done, id} = this.props.item
    return (
      <li>
        <input type="checkbox" checked={done} onChange={ ()=>{this.handChecked(this.props.item)} }/>
        <span>{title}</span>
        <button onClick={()=>(this.handDelete(id))}>删除</button>
      </li>
    )
  }

  handDelete(id) {
    this.props.deleteFunc(id)
  }

  handChecked(item) {
    this.props.checkedFunc(item)
  }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    deleteFunc: PropTypes.func.isRequired,
}
