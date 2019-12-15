import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import Courses from '@components/Courses';
import Login from '@components/Login';
import Quiz from '@components/Quiz';
import Questions from '@components/Question';
import cardOne from './components/Answer/cardOne';
import cardTwo from './components/Answer/cardTwo';
import cardThree from './components/Answer/cardThree';
import cardFim from './components/Answer/cardFim';

import './app.css';

const app = props => {
  const routes = (
    <Switch>
      <Route path="/public" exact component={Login} />
      <Route path="/public/courses" component={Courses} />
      <Route path="/public/quiz" component={Quiz} />
      <Route path="/public/questions" component={Questions} />
      <Route path="/public/cardone" component={cardOne} />
      <Route path="/public/cardtwo" component={cardTwo} />
      <Route path="/public/cardThree" component={cardThree} />
      <Route path="/public/cardfim" component={cardFim} />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<p>Pending...</p>}>{routes}</Suspense>
    </Layout>
  );
};

export default withRouter(app);
