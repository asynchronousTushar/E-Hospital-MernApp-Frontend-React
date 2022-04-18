import * as actionType from './actionTypes';

const signUp = (userData) => {

    console.log(userData)
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

const signUpFailed = () => {
    return {
        type: actionType.SIGNUP_Failed
    }
}

export const fetchSignUpData = (userData) => {
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
                dispatch(signUp(data.user));
                localStorage.setItem("authToken", data.token)
            })
            .catch(e => {
                dispatch(signUpFailed())
            })
    }
}
