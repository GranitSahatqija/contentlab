import { baseUrl } from '../../variables/Variables.jsx'

import axios from 'axios'
window.axios = axios

export const login = (user) => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_ATTEMPT",
            isAuthenticated: false
        })
        return fetch(baseUrl + '/api/auth/login',
            {
                body: JSON.stringify(user),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: "POST",
            })
            .then((response) => {
                response.json()
                .then((data) => {
                    if (response.status === 200) {

                        // If success auth, then store jwt-token in local storage
                        localStorage.setItem('jwtToken', data.token)

                        dispatch(
                            {
                                type: "LOGIN_ATTEMPT_SUCCESS",
                                response: data,
                                isAuthenticated: true
                            }
                        )
                    } else {

                        dispatch(
                            {
                                type: "LOGIN_ATTEMPT_FAILED",
                                message: data,
                                isAuthenticated: false
                            }
                        )
                    }
                })
            });
    };
};

export const getAuthUser = () => {

    let jwtToken = localStorage.getItem('jwtToken') || null
    let config = {}

    if(jwtToken) {
        config = {
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            },
            method: "GET",
        }
    } else {
        throw "No token saved!"
    }

    return (dispatch) => {
        dispatch({
            type: "FETCH_AUTH_USER"
        })
        return fetch(baseUrl + '/api/admin/auth/user', config)
            .then((response) => {
                response.json()
                .then((data) => {
                    if (response.status === 200) {
                        dispatch(
                            {
                                type: "FETCH_AUTH_USER_SUCCESS",
                                user: data,
                            }
                        )
                    } else {

                        dispatch(
                            {
                                type: "FETCH_AUTH_USER_FAILED",
                                message: data,
                            }
                        )
                    }
                })
            });
    };
};

export const logOut = () => {
    let jwtToken = localStorage.getItem('jwtToken') || null
    let config = {}

    if(jwtToken) {
        config = {
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            },
            method: "POST"
        }
    } else {
        throw "No token saved!"
    }

    return (dispatch) => {
        dispatch({
            type: "LOGOUT_ATTEMPT",
            isAuthenticated: false
        })
        return fetch(baseUrl + '/api/auth/logout', config)
            .then((response) => {
                response.json()
                .then((data) => {
                    if (response.status === 200) {
                        // If success logout, then remove jwt-token from local storage
                        localStorage.removeItem('jwtToken')

                        dispatch(
                            {
                                type: "LOGOUT_ATTEMPT_SUCCESS",
                                message: data,
                                isAuthenticated: false,
                            }
                        )
                    } else {

                        dispatch(
                            {
                                type: "LOGOUT_ATTEMPT_FAILED",
                                message: data,
                                isAuthenticated: true
                            }
                        )
                    }
                })
            });
    };
};


export default function dispatchUser (data) {

    console.log(data);

    let token = data.token

    // localStorage.setItem('jwtToken', token)

    dispatch(
        {
            type: "LOGIN_ATTEMPT_SUCCESS",
            response: data,
            isAuthenticated: true
        }
    )
    location.reload()
};