import * as actionType from './actionTypes';

export const signUp = (userData) => {
    return {
        type: actionType.SIGNUP,
        payload: userData
    }
}
