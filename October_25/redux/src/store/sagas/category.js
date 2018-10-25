import { call, put } from 'redux-saga/effects'
import { fetch } from '../api/category'

function * fetchProducts() {
  try {
    const products = yield call(fetch)
    console.log(products)
    yield put({
      type: 'UPDATE_LIST_OF_PRODUCTS',
      payload: products
    })
  } catch (error) {
    yield put({
      type: 'UPDATE_LIST_OF_PRODUCTS_ERROR',
      payload: error
    })
  }
}

export default fetchProducts
