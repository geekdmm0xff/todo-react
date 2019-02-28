import React, { Component } from 'react'
import { connect } from 'dva'

export class App extends Component {
  render() {
    return (
      <div>
        num: {this.props.v}
        <button onClick={() => { this.props.dispatch({type: 'counter/add', payload: { num: 1 } }) }}>增加1</button>
        <button onClick={() => { this.props.dispatch({type: 'counter/add', payload: { num: 2 } }) }}>增加2</button>
        <button onClick={() => { this.props.dispatch({type: 'counter/reduce', payload: { num: 1 }}) }}>减少1</button>
        <button onClick={() => { this.props.dispatch({type: 'counter/reduce', payload: { num: 2 }}) }}>减少2</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { v } = state.counter
  return {
    v,
  }
}

export default connect(mapStateToProps)(App)