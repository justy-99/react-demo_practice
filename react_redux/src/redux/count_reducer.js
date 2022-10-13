const initState = 0

export default function countReducer(previousState = initState, action) {
  const {type,data} = action
  
  switch (type){
    case 'increment':
      return previousState + data
    case 'decrement':
      return previousState - data
    default:
      return previousState
  }
}