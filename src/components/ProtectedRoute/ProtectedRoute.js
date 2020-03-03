import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as ROUTES from '../../constants/routes';

const ProtectedRoute = ({
  component: Component,
  permitted,
  redirectPath = ROUTES.HOME,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return permitted ? <Component {...props} /> : <Redirect to={redirectPath} />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  permitted: PropTypes.bool.isRequired,
  path: PropTypes.string,
  redirectPath: PropTypes.string,
  exact: PropTypes.bool,
};

export default ProtectedRoute;
