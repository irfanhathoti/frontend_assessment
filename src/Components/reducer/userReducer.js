

//here i perform reducer its taking two argument state and the action 
const userReducer = (state, action) => {
    // by macthing action type that code will be exected
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: true };
        case "SET_API_DATA":
            return {
                ...state, isLoading: false, users: action.payload,
            }
        case "API_ERROR":
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}

export default userReducer