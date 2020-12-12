import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({ 
    todos: todoReducer,
    auth: authReducer
})

export default rootReducer;