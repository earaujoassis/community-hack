import * as actionTypes from '../actions/types';

const initialState = {
  user: undefined,
  projects: undefined,
  applications: undefined,
  servers: undefined,
  reportTopics: undefined,
  reportView: undefined,
  error: undefined,
  loading: [],
  success: false
};

const addLoading = (state, entity) => {
  const loading = JSON.parse(JSON.stringify(state.loading));
  loading.push(entity);
  return loading;
};

const reduceLoading = (state, entity) => {
  const loading = JSON.parse(JSON.stringify(state.loading));
  return loading.filter(element => element !== entity);
};

const userRecordStart = (state, action) => {
  return Object.assign({}, state, { loading: addLoading(state, 'user') });
};

const userRecordSuccess = (state, action) => {
  return Object.assign({}, state, {
    loading: reduceLoading(state, 'user'),
    success: true,
    error: null,
    user: action.user || { error: true }
  });
};

const userRecordError = (state, action) => {
  return Object.assign({}, state, {
    loading: reduceLoading(state, 'user'),
    success: false,
    error: action.error
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_RECORD_START: return userRecordStart(state, action);
    case actionTypes.USER_RECORD_SUCCESS: return userRecordSuccess(state, action);
    case actionTypes.USER_RECORD_ERROR: return userRecordError(state, action);
    default: return state;
  }
};

export default reducer;
