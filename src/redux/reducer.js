import * as actionType from './actionTypes';

const intialState = {
    mode: 'user',
    isLogedIn: false,
    isLoading: true
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.SIGNUP:
            return {
                ...state,
                user: action.payload,
                isLogedIn: true,
                isLoading: false
            }

        case actionType.LOGIN:
            return {
                ...state,
                user: action.payload,
                isLogedIn: true,
                isLoading: false
            }

        case actionType.LOGOUT:
            return {
                mode: 'user',
                isLogedIn: false,
                isLoading: false
            }

        case actionType.LOGIN_FAILED:
            return {
                ...state,
                isLogedIn: false
            }

        case actionType.MODE_SWITCH:
            return {
                ...state,
                mode: state.mode === 'user' ? 'admin' : 'user',
                isLogedIn: false
            }

        default:
            return state;
    }
}

export default reducer;