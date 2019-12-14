import * as actionTypes from './types';
import fetch from './fetch';

export const serverRecordStart = () => {
  return {
    type: actionTypes.SERVER_RECORD_START
  };
};

export const serverRecordSuccess = (data) => {
  return {
    type: actionTypes.SERVER_RECORD_SUCCESS,
    servers: data.servers
  };
};

export const serverRecordError = (error) => {
  return {
    type: actionTypes.SERVER_RECORD_ERROR,
    error: error
  };
};

export const fetchServers = () => {
  return dispatch => {
    dispatch(serverRecordStart());
    fetch.get(`servers`)
      .then(response => {
        dispatch(serverRecordSuccess(response.data));
      })
      .catch(error => {
        dispatch(serverRecordError(error));
      });
  };
};
