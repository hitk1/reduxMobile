import { combineReducers } from 'redux'

import cartReduce from './cart/reducer'

export default combineReducers({
    cart: cartReduce
})

export type ReducerRedux = ReturnType<typeof combineReducers>