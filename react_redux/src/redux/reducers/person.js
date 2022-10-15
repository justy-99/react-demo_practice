import { ADD_PERSON } from "../constant";

const initState = [{id:'001',name: '苏圳艺', age: 18}]

export default function personReducer (previousState = initState, action) {
  const {type,data} = action

  switch(type) {
    case ADD_PERSON:
      return [data, ...previousState]
    default:
      return previousState
  }
}