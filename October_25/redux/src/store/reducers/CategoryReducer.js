const initialState = {
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORY_SOME_TYPE':
            return state;
        case 'CATEGORY_SOME_OTHER_TYPE':
            return state;
        default:
            return state;
  }
};
