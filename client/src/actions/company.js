import axios from 'axios';

import { setAlert } from './alert';

import {
  
    GET_COMPANY,
    GET_COMPANIES,
    COMPANY_ERROR,
    UPDATE_COMPANY,
    ACCOUNT_DELETED,
    CLEAR_COMPANY
} from './types';
// get current company rh
export const getCompanyByrh = () => async dispatch => {
    try {
        const res = await axios.get('/api/company/rh');

        dispatch({
            type: GET_COMPANY,
            payload: res.data
        });

    }catch (err) {
        dispatch({
            type: COMPANY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
};

// Get all companiess
export const getCompanies = () => async (dispatch) => {
  dispatch({ type: CLEAR_COMPANY });

  try {
    const res = await axios.get('/api/company');

    dispatch({
      type: GET_COMPANY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Get company by ID
/* export const getCompanyById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/company/${id}`);

    dispatch({
      type: GET_COMPANY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}; */

//Create or update job

export const createCompany = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/company',formData,config);
        dispatch({
            type: GET_COMPANY,
            payload: res.data
        });
        dispatch(setAlert(edit ? 'company Updated' : 'company Created', "success"));
        if(!edit){
            history.push('/dashboard');
        }

    } catch (err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }      
        dispatch({
            type: COMPANY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });

    }
}

  
 

  