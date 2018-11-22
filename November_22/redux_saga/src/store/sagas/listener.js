import { takeEvery } from 'redux-saga/effects'
import { listenerActions } from '../actions'
import listingSaga from './listing'
import cartSaga from './cart'

function * listenerSaga () {
  // LISTING
  yield takeEvery(listenerActions.FETCH_REQUEST, listingSaga.fetchProducts)

  // CART
  yield takeEvery(listenerActions.ADD_REQUEST, cartSaga.add)
  yield takeEvery(listenerActions.REDUCE_REQUEST, cartSaga.reduce)
}

export default listenerSaga
