import { cartActions } from '../actions'

const initialState = {
    items: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case cartActions.ADD: {
            let { id } = action.payload;
            let prevQuantity = state.items[id] || 0

            return {
                items: {
                    ...state.items,
                    [id]: prevQuantity + 1
                }
            }
        }

        case cartActions.REDUCE: {
            let { id } = action.payload;
            let prevQuantity = state.items[id] || 0
            
            if (prevQuantity === 0) {
                return state;
            }

            return {
                items: {
                    ...state.items,
                    [id]: prevQuantity - 1
                }
            }
        }

        default:
            return state;
  }
};
