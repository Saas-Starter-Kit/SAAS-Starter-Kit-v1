import React from 'react';
import { navigate } from 'gatsby';

//check token expires time on private routes
const isTokenValid = () => {
  let expiresAt = JSON.parse(localStorage.getItem('expiresIn'));
  return new Date().getTime() < expiresAt;
};

export const PrivateRoute = ({ component: Component, location, app_id, ...rest }) => {
  if (!isTokenValid()) {
    navigate('/auth/login');
    return null;
  } else if (!app_id) {
    navigate('/user/dashboard');
    return null;
  } else {
    return <Component {...rest} />;
  }
};
