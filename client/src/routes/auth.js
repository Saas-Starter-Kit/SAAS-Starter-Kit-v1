import React from 'react';
import { Router } from '@reach/router';
import { SignUp, Login, PasswordReset, ConfirmedEmail } from '../screens/Auth';
import Layout from '../components/Auth/Layout';

const Routes = () => {
  return (
    <Layout>
      <Router>
        <Login path="/auth/login" />
        <SignUp path="/auth/signup" />
        <PasswordReset path="/auth/passwordreset" />
        <ConfirmedEmail path="/auth/confirmedemail" />
        <Login path="/auth" />
      </Router>
    </Layout>
  );
};

export default Routes;
