const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "USER_LOADING":
            return{
                ...state,
                isLoading: true
            }
        case "USER_LOADED":
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.user
            }
        case "SIGN_IN":
        case "SIGN_UP":
            return {
                ...state,
                ...action,
                isAuthenticated: true,
                isLoading: false,
            }
        case "SIGN_OUT":
            localStorage.removeItem('token')
            return {
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state
    }
}

export default authReducer;