import { call, put } from 'redux-saga/effects'
import { fetch } from '../api/listing'
import { listingActions, errorActions } from '../actions'

function * fetchProducts() {
  try {
    const products = yield call(fetch)

    yield put({
      type: listingActions.FETCH,
      payload: products
    })
  } catch (error) {
    yield put({
      type: errorActions.LISTING_FETCH_FAILURE,
      payload: { error }
    })
  }
}

export default {
  fetchProducts
}
