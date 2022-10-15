import {connect} from 'react-redux'
import React, { Component } from 'react'

// import CountUI from '../../components/Count'

import { 
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction 
} from '../../redux/actions/count'

// const mapStateToProps = state => ({count: state})
// const mapDispatchToProps = dispatch => ({
//   increment: number => dispatch(createIncrementAction(number)),
//   decrement: number => dispatch(createDecrementAction(number)),
//   incrementAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
// })
class CountUI extends Component {

  increment = () => {
    const {value} = this.selectNumber
    this.props.increment(value*1)
  }

  decrement = () => {
    const {value} = this.selectNumber
    this.props.decrement(value*1)
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.incrementAsync(value*1, 1000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为{this.props.count}</h1>
        <select ref={ c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementAsync}>异步加</button>
        <h2>下面有{this.props.person.length}人</h2>
      </div>
    )
  }
}

export default connect(
  state => ({count: state.count,person: state.person}),
  // mapDispatchToProps一般写法 函数
  // dispatch => ({
  //   increment: number => dispatch(createIncrementAction(number)),
  //   decrement: number => dispatch(createDecrementAction(number)),
  //   incrementAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
  // })
  // mapDispatchToProps一般写法精简写法 对象
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
)(CountUI)