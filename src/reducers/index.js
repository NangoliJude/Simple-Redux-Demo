import { combineReducers } from 'redux';
import userReducer from './reducer-user';
import activeReducer from './reducer-active';


const allReducers = combineReducers({
    users: userReducer,
    active: activeReducer
});

export default allReducers;