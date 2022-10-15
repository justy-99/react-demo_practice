import React, { Component } from 'react'
// import store from '../../redux/store'
// import { createDecrementAction,createIncrementAction,createIncrementAsyncAction } from '../../redux/count_action'

export default class Count extends Component {

  increment = () => {
    const {value} = this.selectNumber
    // store.dispatch({type:'increment', data: value*1})
    // store.dispatch(createIncrementAction(value*1))
    this.props.increment(value*1)

  }

  decrement = () => {
    const {value} = this.selectNumber
    // store.dispatch({type:'decrement', data: value*1})
    // store.dispatch(createDecrementAction(value*1))
    this.props.decrement(value*1)
  }

  // incrementIfOdd = () => {
  //   // const {value} = this.selectNumber
  // }

  incrementAsync = () => {
    const {value} = this.selectNumber
    // store.dispatch(createIncrementAsyncAction(value*1, 1000))
    this.props.incrementAsync(value*1, 1000)
  }

  render() {
    console.log('props',this.props);
    
    return (
      <div>
        {/* <h1>当前求和为{store.getState()}</h1> */}
        <h1>当前求和为{this.props.count}</h1>
        <select ref={ c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {/* <button onClick={this.incrementIfOdd}>奇数再加</button> */}
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
