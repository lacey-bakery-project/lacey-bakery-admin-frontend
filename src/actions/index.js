import axios from "axios"
import { base_URL } from "../api"

export const IS_ADMIN = 'IS_ADMIN'
export const USERNAME = 'USERNAME'
export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const loginAdmin = status => ({ type: IS_ADMIN, payload: status })
export const getUsername = username => ({ type: USERNAME, payload: username })
export const fetchProductStart = () => ({ type: FETCH_START })
export const fetchProductSuccess = products => ({ type: FETCH_SUCCESS, payload: products })
export const fetchProductFailure = errors => ({ type: FETCH_FAILURE, payload: errors })
export const fetchProducts = () => dispatch => {
    dispatch(fetchProductStart)
    axios.get(`${base_URL}/api/products`)
        .then(res => {
            dispatch(fetchProductSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchProductFailure(err.response.data.message))
        })
}

