import * as actionType from './actionTypes';

const intialState = {}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.SIGNUP:
            return {
                ...state,
                user: action.payload
            }

        default : 
        return state;
    }
}

export default reducer;