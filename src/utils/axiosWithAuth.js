import axios from 'axios'
import { base_URL } from '../api'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: `${base_URL}`
    })
}
