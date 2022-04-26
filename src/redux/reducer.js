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
                isLogedIn: false,
                isLoading: false
            }

        case actionType.MODE_SWITCH:
            return {
                mode: state.mode === 'user' ? 'admin' : 'user',
                isLogedIn: false,
                isLoading: false
            }

        case actionType.ADMIN_SIGNUP:
            return {
                ...state,
                isLogedIn: true,
                admin: action.payload
            }

        case actionType.ADMIN_LOGIN:
            return {
                ...state,
                isLogedIn: true,
                admin: action.payload
            }

            case actionType.ADMIN_LOGOUT: 
            return {
                ...state,
                isLogedIn: false,
                admin: undefined
            }

        default:
            return state;
    }
}

export default reducer;