import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import EmailNotVerified from '../../modules/auth/components/EmailNotVerified';

import { authUserSelector } from '../../modules/auth/authSelectors';
import * as ROUTES from '../../constants/routes';

const ProtectedRoute = ({ component: Component, permit, redirectPath = ROUTES.HOME, ...rest }) => {
  const authUser = useSelector(authUserSelector, shallowEqual);
  const isAuthenticated = !!authUser;

  return (
    <Route
      {...rest}
      render={props => {
        if (permit(isAuthenticated) && isAuthenticated && !authUser.emailVerified) {
          return <EmailNotVerified />;
        }
        return permit(isAuthenticated) ? <Component {...props} /> : <Redirect to={redirectPath} />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  permit: PropTypes.func.isRequired,
  path: PropTypes.string,
  redirectPath: PropTypes.string,
  exact: PropTypes.bool,
};

export default ProtectedRoute;
