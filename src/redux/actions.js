import * as actionType from './actionTypes';

const signUp = (userData) => {

    console.log(userData)
    return {
        type: actionType.SIGNUP,
        payload: userData
    }
}

const logIn = (userData) => {
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

const signUpFailed = () => {
    return {
        type: actionType.SIGNUP_FAILED
    }
}

const logInFailed = () => {
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
                    throw new Error()
                }

                return res.json();
            })
            .then((data) => {
                dispatch(logIn(data))
            })
            .catch(e => {

            })
    }
}

export const fetchLogInData = (email, password) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3006/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error()
                }

                return res.json()
            })
            .then((data) => {
                dispatch(logIn(data.user))
                localStorage.setItem('authToken', data.token)
            })
            .catch((e) => {
                dispatch(logInFailed())
            })
    }
}

export const fetchSignUpData = (userData) => {
    delete userData.confirmPassword;
    return (dispatch) => {
        fetch('http://127.0.0.1:3006/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((res) => {
                if (res.status !== 201) {
                    throw new Error()
                }

                return res.json()
            })
            .then(data => {
                delete userData.password;
                dispatch(signUp(userData));
                localStorage.setItem("authToken", data.token)
            })
            .catch(e => {
                dispatch(signUpFailed())
            })
    }
}
