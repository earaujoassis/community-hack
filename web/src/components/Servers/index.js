import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import * as actions from '../../actions';
import { useInterval } from '../../utils/hooks';
import { SpinningSquare } from '../UI';

import './style.css';

const THRESHOLD = 15.0; // min

const diffAboveThreshold = (serverUpdate) => {
  const now = moment(new Date());
  const then = moment.utc(serverUpdate, 'YYYY-MM-DD HH:mm:ss UTC');
  const diff = now.diff(then);
  return (diff / 1000 / 60) > THRESHOLD;
};

const diffDisplay = (serverUpdate) => {
  return moment.utc(serverUpdate, 'YYYY-MM-DD HH:mm:ss UTC').startOf('minute').fromNow();
};

const servers = ({ fetchServers, loading, servers = [] }) => {
  useEffect(() => {
    fetchServers();
  }, []);

  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    setSeconds(seconds + 1 > 960 ? 0 : seconds + 1);
  }, 1000);

  return (
    <div className="layout-root__siblings">
      <div className="servers-root">
        <h2>Servers</h2>
        {loading.includes('server') ? <SpinningSquare /> : (
          <ul className="servers-list">
            {servers.map((server, i) => (
              <li key={i}>
                <div className="servers-box">
                  <span className="server-status-box"
                    title={diffAboveThreshold(server.updated_at) ? 'Inactive' : 'Active'}>
                    <span
                      className={`server-status ${diffAboveThreshold(server.updated_at) ? 'inactive' : 'active'}`}></span>
                    <span className="server-time-lapse" title={server.updated_at}>
                      {diffDisplay(server.updated_at)}
                    </span>
                  </span>
                  <h3 className="servers-title">{server.hostname}</h3>
                  <p className="servers-description">
                    <span>{server.ip}</span>
                    <span className="servers-spacer">&mdash;</span>
                    <span>v{server.latest_version || '?'}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.root.loading,
    servers: state.root.servers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(actions.fetchServers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(servers);
