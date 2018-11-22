import { takeEvery } from 'redux-saga/effects'
import categorySaga from './category'

function * listenerSaga () {
  console.log('created')
  yield takeEvery('FETCH_LIST_OF_PRODUCTS', categorySaga.fetchProducts)
}

export default listenerSaga
