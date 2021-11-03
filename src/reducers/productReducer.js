import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions"

const initialState = {
    isFetching: false,
    products: [],
    errors: ''
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return ({
                ...state,
                isFetching: true,
                products: [],
                errors: ''
            })
        case FETCH_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                products: action.payload,
                errors: ''
            })
        case (FETCH_FAILURE):
            return ({
                ...state,
                isFetching: false,
                products: [],
                errors: action.payload
            })
        default:
            return state

    }
}

export default productReducer
