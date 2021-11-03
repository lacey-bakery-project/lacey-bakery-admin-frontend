import { combineReducers } from 'redux'
import adminReducer from './adminReducer';
import usernameReducer from './usernameReducer';
import productReducer from './productReducer';

export default combineReducers({
    admin: adminReducer,
    username: usernameReducer,
    products: productReducer
})
