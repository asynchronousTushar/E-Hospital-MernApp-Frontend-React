import * as actionType from './actionTypes';

const intialState = {}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.SIGNUP:
            return {
                ...state,
                user: action.payload,
                isLogedIn: true
            }


        case actionType.LOGIN:
            return {
                ...state,
                user: action.payload,
                isLogedIn: true
            }


        case actionType.LOGOUT:
            return {
                isLogedIn: false
            }

            case actionType.LOGIN_FAILED: 
            return {
                isLogedIn: false
            }

        default:
            return state;
    }
}

export default reducer;