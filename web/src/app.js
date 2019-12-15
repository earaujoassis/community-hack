import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import Courses from '@components/Courses';
import Login from '@components/Login';
import Quiz from '@components/Quiz';
import Offer from '@components/Offer';

import './app.css';

const app = props => {
  const routes = (
    <Switch>
      <Route path="/public" exact component={Login} />
      <Route path="/public/courses" component={Courses} />
      <Route path="/public/quiz" component={Quiz} />
      <Route path="/public/offer/" exact component={Offer} />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<p>Pending...</p>}>{routes}</Suspense>
    </Layout>
  );
};

export default withRouter(app);
