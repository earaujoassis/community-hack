import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { extractDataForm } from '../../utils';

import './style.css';

const configuration = ({ updateUser, user = {} }) => {
  return (
    <div className="configuration-root">
      <h2>Configuration</h2>
      <div className="configuration-section">
        <form onSubmit={(e) => {
          e.preventDefault();
          const data = { user: extractDataForm(e.target, ['email', 'github_token']) };
          updateUser(user.id, data);
        }}>
          <div className="input-box">
            <label htmlFor="user_email">E-mail</label>
            <input type="email" id="user_email" name="email" defaultValue={user.email} />
          </div>
          <div className="input-box">
            <label htmlFor="user_github_token">GitHub Token</label>
            <input type="text" id="user_github_token" name="github_token" defaultValue={user.github_token} />
          </div>
          <div className="input-box">
            <a href={`/api/users/${user.id}/credentials`}
              title="It regenerates the client's key &amp; secret for security reasons"
              rel="noopener noreferrer"
              target="_blank">Download credentials for agents</a>
          </div>
          <button type="submit" className="button">Save</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.root.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (id, data) => dispatch(actions.updateUser(id, data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(configuration);
