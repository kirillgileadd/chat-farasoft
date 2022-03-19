const initialState = {
    isAuth: false,
    username: '',
    location: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                isAuth: true,
                username: action.payload
            }
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload
            }
        default:
            return state;
    }
}