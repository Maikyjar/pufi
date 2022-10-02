const initialState = {
    initial: 0,
}

function rootReducer(state = initialState, action) {
    if (action.type === "PLUS") {
        return {
          ...state,
          initial: 1,
        };
    }
    return state;
}

export default rootReducer;