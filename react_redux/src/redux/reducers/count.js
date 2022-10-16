import { INCREMENT,DECREMENT } from "../constant"

const initState = 0

export default function count(previousState = initState, action) {
  const {type,data} = action
  
  switch (type){
    case INCREMENT:
      return previousState + data
    case DECREMENT:
      return previousState - data
    default:
      return previousState
  }
}