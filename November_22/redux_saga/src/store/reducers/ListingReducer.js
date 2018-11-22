import { listingActions } from '../actions'

const initialState = {
    listOfProducts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case listingActions.FETCH: {
            return {
                listOfProducts: [
                    ...state.listOfProducts,
                    ...action.payload
                ]
            }
        }

        default:
            return state;
  }
};
