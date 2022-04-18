import * as actionType from './actionTypes';

const intialState = {}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.SIGNUP:
            return {
                ...state,
                user: action.payload
            }

        case actionType.SIGNUP_Failed:
            return {
                ...state,
                signUpFailed: true
            }

        case actionType.LOGOUT:
            localStorage.removeItem('authToken')
            return {}

        default:
            return state;
    }
}

export default reducer;