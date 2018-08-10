const initialState = {
    clients: [],
    client: {},
    clientMessage: "",
    loading: false,
}

export const facebookReducer = (state = initialState, action) => {
    switch (action.type) {

        // ======================================== FETCH CLIENTS ======================================== //
        case 'FETCH_CLIENTS':
            return {
                ...state,
                loading: true,
                clientMessage: ""
            }
            break;

        case 'FETCH_CLIENTS_SUCCESS':
            return {
                ...state,
                clients: action.clients,
                loading: false,
                clientMessage: ""
            }
            break;

        case 'FETCH_CLIENTS_FAILED':
            return {
                ...state,
                clientMessage: action.message
            }
            break;

        // ======================================== STORE CLIENT ======================================== //
        case 'STORE_CLIENT':
            return {
                ...state,
                loading: true,
                clientMessage: ""
            }
            break;

        case 'STORE_CLIENT_SUCCESS':
            return {
                ...state,
                clientMessage: action.message,
                loading: false,
            }
            break;

        case 'STORE_CLIENT_FAILED':
            return {
                ...state,
                clientMessage: action.message
            }
            break;

        default:
            return state;
    }

}
