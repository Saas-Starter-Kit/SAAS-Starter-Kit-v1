import React from 'react';
import { Router } from '@reach/router';
import { SignUp, Login, PasswordReset } from '../screens/Auth';
import Layout from '../components/Auth/Layout';

const Routes = () => {
  return (
    <Layout>
      <Router>
        <Login path="/auth/login" />
        <SignUp path="/auth/signup" />
        <PasswordReset path="/auth/passwordreset" />
        <Login path="/auth" />
      </Router>
    </Layout>
  );
};

export default Routes;
