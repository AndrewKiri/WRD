import { put } from 'redux-saga/effects'
import { cartActions, errorActions } from '../actions'

function * add(action) {
  try {
    const { id } = action.payload;

    yield put({
      type: cartActions.ADD,
      payload: { id }
    })
  } catch (error) {
    yield put({
      type: errorActions.ADD_FAILURE,
      payload: { error }
    })
  }
}

function * reduce(action) {
  try {
    const { id } = action.payload;

    yield put({
      type: cartActions.REDUCE,
      payload: { id }
    })
  } catch (error) {
    yield put({
      type: errorActions.REDUCE_FAILURE,
      payload: { error }
    })
  }
}

export default {
  add,
  reduce
}
