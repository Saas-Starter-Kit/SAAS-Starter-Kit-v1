import React, { useContext, useEffect } from 'react';
import { Router } from '@reach/router';
import { useLocation } from '@reach/router';

import Layout from '../components/App/AppLayout';

import {
  Create,
  Dashboard,
  ReadUpdate,
  Permissions,
  Onboarding,
  Users,
  MachineLearning
} from '../screens/App';

const Routes = () => {
  const location = useLocation();
  const splitPath = location.pathname.split('/');
  const app_id = splitPath[2];

  return (
    <Layout app_id={app_id}>
      <Router>
        {/*<PrivateRoute path="/app/:id/dashboard" component={Dashboard} app_id={app_id} />*/}
        <Dashboard app_id={app_id} path="/app/:id/dashboard" />
        <Create app_id={app_id} path="/app/:id/create" />
        <ReadUpdate app_id={app_id} path="/app/:id/readupdate" />
        <Permissions app_id={app_id} path="/app/:id/permissions" />
        <Users app_id={app_id} path="/app/:id/users" />
        <Onboarding app_id={app_id} path="/app/:id/onboarding" />
        <MachineLearning app_id={app_id} path="/app/:id/machinelearning" />
      </Router>
    </Layout>
  );
};

export default Routes;
