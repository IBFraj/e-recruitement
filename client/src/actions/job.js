import axios from 'axios';

import { setAlert } from './alert';

import {
  
    GET_JOB,
    GET_JOBS,
    JOB_ERROR,
    UPDATE_JOB,
    ACCOUNT_DELETED,
    CLEAR_JOB
} from './types';
// get current jobs rh
export const getJobByrh = () => async dispatch => {
    try {
        const res = await axios.get('/api/job/rh');

        dispatch({
            type: GET_JOB,
            payload: res.data
        });

    }catch (err) {
        dispatch({
            type: JOB_ERROR,
            payload: { msg: err.response, status: err.response.status}
        });
    }
};

// Get all jobs
export const getJobs = () => async (dispatch) => {
 

  try {
    const res = await axios.get('/api/job');

    dispatch({
      type: GET_JOBS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Get job by ID
export const getJobById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/job/${id}`);

    dispatch({
      type: GET_JOB,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or update job

export const createJob = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/job',formData,config);
        dispatch({
            type: GET_JOB,
            payload: res.data
        });
        dispatch(setAlert( 'Job Created', "success"));
        if(!edit){
            history.push('/jobs');
        }

    } catch (err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }      
        dispatch({
            type: JOB_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });

    }
}

  
 

  