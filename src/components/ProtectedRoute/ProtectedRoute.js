import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as ROUTES from '../../constants/routes';

const renderRoute = (permitted, Component, redirectPath) => props => {
  return permitted ? <Component {...props} /> : <Redirect to={redirectPath} />;
};

const ProtectedRoute = ({ path, component, permitted, redirectPath = ROUTES.HOME, ...rest }) => {
  return <Route path={path} {...rest} render={renderRoute(permitted, component, redirectPath)} />;
};

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  permitted: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;
