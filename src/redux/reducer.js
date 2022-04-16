import * as actionType from './actionTypes';

const intialState = {fuck: 'kfeja'}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.SIGNUP:
            return {
                user: action.payload
            }

        default : 
        return state;
    }
}

export default reducer;