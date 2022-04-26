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

export const logOut = () => {
    return {
        type: actionType.LOGOUT
    }
}

const tokenLogInFailed = () => {
    return {
        type: actionType.LOGIN_FAILED
    }
}

export const checkAuthToken = (token) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3006/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then((res) => {
                if (res.status !== 200) {
                    dispatch(tokenLogInFailed())
                    throw new Error();
                }

                return res.json();
            })
            .then((data) => {
                dispatch(logIn(data))
            })
            .catch(e => {
                dispatch(tokenLogInFailed())
            })
    }
}

export const switchMode = () => {
    return {
        type: actionType.MODE_SWITCH
    }
}

export const adminSignUp = (userData) => {
    return {
        type: actionType.ADMIN_SIGNUP,
        payload: userData
    }
}

export const adminLogIn = (userData) => {
    return {
        type: actionType.ADMIN_LOGIN,
        payload: userData
    }
}

export const adminLogOut = () => {
    return {
        type: actionType.ADMIN_LOGOUT
    }
}





