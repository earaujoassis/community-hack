import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { SpinningSquare } from '../UI';

import './style.css';

const classNameForStatus = (status) => {
  switch (status) {
    case 'created': return 'app-warning';
    case 'running': return 'app-warning';
    case 'finished': return 'app-normal';
    case 'failed': return 'app-error';
  }
};

const applications = ({ fetchApplications, loading, user, applications = [] }) => {
  useEffect(() => {
    if (user) {
      fetchApplications(user.id);
    }
  }, [user]);

  return (
    <div className="applications-root">
      <h2>Applications</h2>
      {loading.includes('application') ? <SpinningSquare /> : (
        <ul className="applications-list">
          {applications.map((application, i) => (
            <li key={i}>
              <div className="application-box">
                <h2 className="application-name">{application.full_name}</h2>
                <p className="application-description">{application.description}</p>
                <div className="application-deploys-box">
                  {application.actions.map((action, i) => (
                    <span
                      key={i}
                      className={`app-square ${classNameForStatus(action.current_status)}`}
                      title={`${action.description} - ${action.current_status}`} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.root.loading,
    user: state.root.user,
    applications: state.root.applications
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApplications: (id) => dispatch(actions.fetchApplications(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(applications);
