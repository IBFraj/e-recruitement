import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER1_SUCCESS,
    REGISTER1_FAIL,
    RH_LOADED,
    AUTH1_ERROR,
    LOGIN1_FAIL,
    LOGIN1_SUCCESS,
    LOGOUT1 ,
    CLEAR_RH,

 } from '../actions/types'
import setAuthToken from '../utils/setAuthToken';

//Load rh
export const loadRh = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth1');
        dispatch({
            type: RH_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH1_ERROR
        });
    }

}

//Register rh
export const register1 =({name, email, password}) => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  const body = JSON.stringify({name, email, password});
  try {
      const res = await axios.post('/api/rh', body,config);
      dispatch({
          type: REGISTER1_SUCCESS,
          payload: res.data
      })
  }catch (err) {
      const errors = err.response.data.errors;
      if(errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }      
          
     
    dispatch({
        type: REGISTER1_FAIL  
    }); 

  }
  
};
//login  rh
export const login1 = (email, password) => async dispatch => {
   
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
     const body = JSON.stringify({ email, password });
  
    try {
      const res = await axios.post('/api/auth1', body,config);
  
      dispatch({
        type: LOGIN1_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadRh());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: LOGIN1_FAIL
      });
    }
  };
  //logout / clear profile
  export const logout1 = () => dispatch => {
    dispatch({
        type: LOGOUT1,
        
      });
      dispatch({
        type: CLEAR_RH,
        
      });
  
  }