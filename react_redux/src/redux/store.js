import {createStore,applyMiddleware} from 'redux'

import countRedcer from './count_reducer'
import thunk from 'redux-thunk'

export default createStore(countRedcer, applyMiddleware(thunk))
