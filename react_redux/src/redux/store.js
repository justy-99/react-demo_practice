import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'

import countRedcer from './reducers/count'
import personReducer from './reducers/person'

const allReducer = combineReducers({
  count: countRedcer,
  person: personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))
