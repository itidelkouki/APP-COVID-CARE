import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthDoctor = useSelector((state) => state.authReducer.isAuthDoctor);
  if (!isAuthDoctor) {
    return <Redirect to="/" />;
  }                                    // path="/" render="" exact
  return <Route component={Profiles} {...rest} />;
};
export default PrivateRoute;
