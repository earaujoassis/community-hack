import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { SpinningSquare } from '../UI';

import './style.css';

const root = ({ children, loading, user, fetchUser, createUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  if (loading.includes('server') && !user) {
    return <div className="galaxy-center"><SpinningSquare /></div>;
  }

  return (
    <div className="userRealm-root">
      {children}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.root.loading,
    user: state.root.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(actions.fetchUser()),
    createUser: (data) => dispatch(actions.createUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(root);
