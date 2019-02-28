import React, { Component } from 'react'
import { connect } from 'dva'
import classNames from 'classnames'

export class TodoFooter extends Component {

  render() {
    const { show, dones, undones } = this.props
    return (
      <div>
        <label>当前：已做 {dones.length} 件，未做 {undones.length} 件</label>
        <div>
          <a 
          className={classNames({'cur': show === 'show-all'})} 
          href="javascript:void(0);" 
          onClick={() => { this.props.dispatch({type: 'todo/show', 'payload': {show: 'show-all'}})}}
          >
          查看全部
          </a>
          <a 
          className={classNames({'cur': show === 'only-undone'})} 
          href="javascript:void(0);" 
          style={{margin: '0 20px'}}
          onClick={() => { this.props.dispatch({type: 'todo/show', 'payload': {show: 'only-undone'}})}}
          >
          
          查看未做
          </a>
          <a 
          className={classNames({'cur': show === 'only-done'})} 
          href="javascript:void(0);" 
          onClick={() => { this.props.dispatch({type: 'todo/show', 'payload': {show: 'only-done'}})}}
          >
          查看完成
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.todo.show,
    dones: state.todo.todos.filter(todo => todo.done),
    undones: state.todo.todos.filter(todo => !todo.done),
  }
}
export default connect(mapStateToProps)(TodoFooter)

