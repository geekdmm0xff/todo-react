import React, { Component } from 'react'
import { connect } from 'dva'

export class TodoFooter extends Component {

  render() {
    return (
      <div>
        <label>当前：已做 0 件，未做 0 件</label>
        <div>
          <a href="javascript:void(0);">查看全部</a>
          <a href="javascript:void(0);" style={{margin: '0 20px'}}>查看未做</a>
          <a href="javascript:void(0);">查看完成</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps)(TodoFooter)

