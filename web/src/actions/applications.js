import * as actionTypes from './types';
import fetch from './fetch';

export const applicationRecordStart = () => {
  return {
    type: actionTypes.APPLICATION_RECORD_START
  };
};

export const applicationRecordSuccess = (data) => {
  return {
    type: actionTypes.APPLICATION_RECORD_SUCCESS,
    user: data.user
  };
};

export const applicationRecordError = (error) => {
  return {
    type: actionTypes.APPLICATION_RECORD_ERROR,
    error: error
  };
};

export const fetchApplications = (id) => {
  return dispatch => {
    dispatch(applicationRecordStart());
    fetch.get(`users/${id}/applications`)
      .then(response => {
        dispatch(applicationRecordSuccess(response.data));
      })
      .catch(error => {
        dispatch(applicationRecordError(error));
      });
  };
};

export const createApplication = (id, data) => {
  return dispatch => {
    dispatch(applicationRecordStart());
    fetch.post(`users/${id}/applications`, data)
      .then(response => {
        dispatch(applicationRecordSuccess(response.data));
      })
      .catch(error => {
        dispatch(applicationRecordError(error));
      });
  };
};
