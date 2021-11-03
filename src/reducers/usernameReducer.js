import { USERNAME } from "../actions"

const initialState = {
    username: ''
}

const usernameReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERNAME:
            return ({
                ...state,
                username: action.payload
            })
        default:
            return state

    }
}

export default usernameReducer
