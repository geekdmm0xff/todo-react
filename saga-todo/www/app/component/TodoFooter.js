import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
// import * as todoActions from '../action/todoActions'
// import { bindActionCreators } from 'redux';

export class TodoFooter extends Component {

  render() {
    const {showType, dones, undones} = this.props
    return (
      <div>
        <label>当前：已做 {dones.length} 件，未做 {undones.length} 件</label>
        <p className="footerInfo">
          <a className={classNames({'cur': showType == 'show-all'})} onClick={()=>{this.handleTageClick('show-all')}} href="javascript:void(0)">查看全部</a>
          <a className={classNames({'cur': showType == 'only-undone'})} onClick={()=>{this.handleTageClick('only-undone')}} href="javascript:void(0)" style={{margin: "0 10px"}}>查看未做</a>
          <a className={classNames({'cur': showType == 'only-done'})} onClick={()=>{this.handleTageClick('only-done')}} href="javascript:void(0)">查看完成</a>
        </p>
      </div>
    )
  }

  handleTageClick(title) {
    // this.props.actions.updateShowType(title)
  }
}

const mapStateToProps = (state) => ({
  showType: state.todoReducer.showType,
  dones: state.todoReducer.todos.filter(todo => todo.done),
  undones: state.todoReducer.todos.filter(todo => !todo.done)
})

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(todoActions, dispatch) 
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)
