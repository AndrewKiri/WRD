import { errorActions } from '../actions'

const initialState = {
    listOfErrors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case errorActions.LISTING_FETCH_FAILURE: {
          let { error } = action.payload;
          let newListOfErrors = [
            ...state.listOfErrors
          ]

          newListOfErrors.push(error)

          return newListOfErrors;
        }
        default:
            return state;
  }
};
