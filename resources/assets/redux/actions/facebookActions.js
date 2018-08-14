import { baseUrl } from '../../variables/Variables.jsx'

export const submitSearch = (searchCriteria) => {
    let jwtToken = localStorage.getItem('jwtToken') || null
    let config = {}

    if(jwtToken) {
        config = {
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(searchCriteria),
        }
    } else {
        throw "No token saved!"
    }

    return (dispatch) => {
        dispatch({
            type: "SEARCH_CONTENT"
        })
        return fetch(baseUrl + '/api/admin/facebook/feeds', config)
            .then((response) => {
                response.json()
                .then((data) => {
                    if (response.status === 200) {
                        dispatch(
                            {
                                type: "SEARCH_CONTENT_SUCCESS",
                                message: data
                            }
                        )
                    } else {
                        dispatch(
                            {
                                type: "SEARCH_CONTENT_FAILED",
                                message: data,
                            }
                        )
                    }
                })
            });
    };
};

export const getFeeds = () => {
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
            type: "FETCH_CLIENTS"
        })
        return fetch(baseUrl + '/api/admin/clients', config)
            .then((response) => {
                response.json()
                .then((data) => {
                    if (response.status === 200) {
                        dispatch(
                            {
                                type: "FETCH_CLIENTS_SUCCESS",
                                clients: data,
                            }
                        )
                    } else {
                        dispatch(
                            {
                                type: "FETCH_CLIENTS_FAILED",
                                message: data,
                            }
                        )
                    }
                })
            });
    };
};