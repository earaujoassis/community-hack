import React from 'react';
import { withRouter } from 'react-router-dom';

import UserRealm from '@components/UserRealm';

import './style.css';

const layout = ({ children, location }) => {
  return (
    <UserRealm>
      <div role="main" className="layout-root">
        <div className="layout-root__corpus">
          <div className="layout-root__siblings">
            <div className="layout-root__corpus">
              {children}
            </div>
          </div>
        </div>
      </div>
    </UserRealm>
  );
};

export default withRouter(layout);
