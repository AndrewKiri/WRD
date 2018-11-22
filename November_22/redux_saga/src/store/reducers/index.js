import { combineReducers } from 'redux'

import MainReducer from './MainReducer'
import CartReducer from './CartReducer'
import CategoryReducer from './CategoryReducer'

export default combineReducers({
  MainReducer,
  CartReducer,
  CategoryReducer
})
