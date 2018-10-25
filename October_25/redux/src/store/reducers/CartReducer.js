const initialState = {
    items: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            let { id } = action.payload;
            let newItems = Object.assign({}, state.items);
            newItems[id] = (newItems[id] || 0) + 1
            return { items: newItems };
        }

        case 'REDUCE': {
            let { id } = action.payload;
            let newItems = Object.assign({}, state.items);
            newItems[id] = Math.max((newItems[id] || 0) - 1, 0)
            return { items: newItems };
        }

        default:
            return state;
  }
};
