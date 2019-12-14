import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import Courses from '@components/Courses';

import './app.css';

const app = props => {
  const routes = (
    <Switch>
      <Route path="/public/" exact component={Courses} />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<p>Pending...</p>}>{routes}</Suspense>
    </Layout>
  );
};

export default withRouter(app);
