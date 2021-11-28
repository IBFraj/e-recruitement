import { combineReducers } from 'redux';
import register from './auth'
import alert from './alert';
import profile from './profile';

export default combineReducers({
    alert,
   register,
   profile
});