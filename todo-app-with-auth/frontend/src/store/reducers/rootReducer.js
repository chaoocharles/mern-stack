import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({ 
    todos: todoReducer
})

export default rootReducer;