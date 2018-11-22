import { combineReducers } from 'redux'

import MainReducer from './MainReducer'
import CartReducer from './CartReducer'
import ListingReducer from './ListingReducer'

export default combineReducers({
  MainReducer,
  CartReducer,
  ListingReducer
})
