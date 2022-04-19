import * as actionType from './actionTypes';

const intialState = {
    signUpFailed: false,
    logInFailed: false
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.SIGNUP:
            return {
                ...state,
                user: action.payload
            }

        case actionType.SIGNUP_FAILED:
            return {
                ...state,
                signUpFailed: !state.signUpFailed
            }

        case actionType.LOGIN:
            return {
                ...state,
                user: action.payload
            }

        case actionType.LOGIN_FAILED:
            return {
                ...state,
                logInFailed: !state.logInFailed
            }

        case actionType.LOGOUT:
            localStorage.removeItem('authToken')
            return {}

        default:
            return state;
    }
}

export default reducer;