import { IS_ADMIN } from '../actions'

const initialState = {
    admin: false
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_ADMIN:
            return ({
                ...state,
                admin: action.payload
            })
        default:
            return state

    }
}

export default adminReducer
