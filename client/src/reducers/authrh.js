import {
    REGISTER1_SUCCESS,
    REGISTER1_FAIL,
    RH_LOADED,
    AUTH1_ERROR ,
    LOGIN1_SUCCESS,
    LOGIN1_FAIL,
    LOGOUT1,
    ACCOUNT_DELETED,
 } from '../actions/types'
 const initialState = {
    token: localStorage.getItem('token'),
     isAuthenticated1: null,
     loading1: true,
     rh: null
 };
 
 export default function(state = initialState, action) {
    const {type, payload } = action
     switch (type) {
         case RH_LOADED:
       return {
         ...state,
         isAuthenticated1: true,
         loading1: false,
         rh: payload
       };
         case REGISTER1_SUCCESS:
         case LOGIN1_SUCCESS :
             localStorage.setItem('token', payload.token);
             return {
                 ...state,
                 ...payload,
                 isAuthenticated1: true,
                 loading1: false
             }
             case REGISTER1_FAIL:
             case AUTH1_ERROR:
             case LOGIN1_FAIL:
             case LOGOUT1:
             case ACCOUNT_DELETED:
                localStorage.removeItem('token');
                return {
                    ...state,
                    token: null,
                    isAuthenticated1: false,
                    loading1: false
                } 
         
         default:
             return state;
     }
 }