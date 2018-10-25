const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SOME_TYPE':
            return { ...state, ...action.payload };
        case 'SOME_OTHER_TYPE':
            return { ...state, ...action.payload };
        default:
            return state;
  }
};