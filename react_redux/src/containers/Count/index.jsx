import {connect} from 'react-redux'

import CountUI from '../../components/Count'

import { 
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction 
} from '../../redux/count_action'

// const mapStateToProps = state => ({count: state})

// const mapDispatchToProps = dispatch => ({
//   increment: number => dispatch(createIncrementAction(number)),
//   decrement: number => dispatch(createDecrementAction(number)),
//   incrementAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
// })


export default connect(
  state => ({count: state}),
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