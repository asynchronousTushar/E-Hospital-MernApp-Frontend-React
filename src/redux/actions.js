import * as actionType from './actionTypes';

export const signUp = (userData) => {
    return {
        type: actionType.SIGNUP,
        payload: userData
    }
}

export const logIn = (userData) => {
    return {
        type: actionType.LOGIN,
        payload: userData
    }
}
