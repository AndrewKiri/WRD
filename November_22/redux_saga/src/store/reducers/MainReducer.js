const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MAIN_SOME_TYPE':
            return { ...state, ...action.payload };
        case 'MAIN_SOME_OTHER_TYPE':
            return { ...state, ...action.payload };
        default:
            return state;
  }
};
