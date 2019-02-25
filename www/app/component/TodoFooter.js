import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TodoFooter extends Component {

  render() {
    return (
      <div>
        <label>当前：已做 4 件，未做 5 件</label>
        <p className="footerInfo">
          <a className="cur" href="javascript:void(0)">查看全部</a>
          <a href="javascript:void(0)" style={{margin: "0 10px"}}>查看未做</a>
          <a href="javascript:void(0)">查看完成</a>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)
