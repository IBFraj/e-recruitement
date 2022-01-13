import { combineReducers } from 'redux';
import register from './auth'
import alert from './alert';
import profile from './profile';
import job from './job';
import company from './company'
import authrh from './authrh';

export default combineReducers({
    alert,
   register,
   profile,
   job,
   company,
   authrh
});