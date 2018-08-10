const initialState = {
    user: {},
    message: "",
    loading: false,
    isAuthenticated: localStorage.getItem('jwtToken') ? true : false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ATTEMPT':
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
                message: ""
            }
            break;

        case 'LOGIN_ATTEMPT_SUCCESS':
            return {
                ...state,
                loading: false,
                isAuthenticated: action.isAuthenticated,
                message: ""
            }
            break;

        case 'LOGIN_ATTEMPT_FAILED':
            return {
                ...state,
                message: action.message,
                isAuthenticated: false,
                loading: false
            }
            break;

        case 'FETCH_AUTH_USER':
            return {
                ...state,
                loading: true,
                message: ""
            }
            break;

        case 'FETCH_AUTH_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.user,
                message: ""
            }
            break;

        case 'FETCH_AUTH_USER_FAILED':
            return {
                ...state,
                message: action.message
            }
            break;

        case 'LOGOUT_ATTEMPT':
            return {
                ...state,
                loading: true,
                isAuthenticated: action.isAuthenticated,
                message: ""
            }
            break;

        case 'LOGOUT_ATTEMPT_SUCCESS':
            return {
                ...state,
                loading: false,
                isAuthenticated: action.isAuthenticated,
                message: action.message
            }
            break;

        case 'LOGOUT_ATTEMPT_FAILED':
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                loading: false,
                message: action.message
            }
            break;

        default:
            return state;
    }

}
