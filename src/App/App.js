import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProtectedRoute from '../components/ProtectedRoute';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Messenger from '../screens/Messenger';
import PageNotFound from '../screens/PageNotFound';

import { useAuthentication } from '../hooks';
import { themeSelector } from './appSelectors';
import * as ROUTES from '../constants/routes';
import './App.scss';

const App = () => {
  const theme = useSelector(themeSelector);
  const authUser = useAuthentication();
  const isAuthenticated = !!authUser;

  return (
    <div className="App" data-theme={theme}>
      <Switch>
        <ProtectedRoute
          path={ROUTES.SIGN_IN}
          component={SignIn}
          permitted={!isAuthenticated}
          redirectPath={ROUTES.HOME}
        />
        <ProtectedRoute
          path={ROUTES.SIGN_UP}
          component={SignUp}
          permitted={!isAuthenticated}
          redirectPath={ROUTES.HOME}
        />
        <ProtectedRoute
          path={ROUTES.RESET_PASSWORD}
          component={ResetPassword}
          permitted={!isAuthenticated}
          redirectPath={ROUTES.HOME}
        />
        <ProtectedRoute
          path={ROUTES.HOME}
          component={Messenger}
          permitted={isAuthenticated}
          redirectPath={ROUTES.SIGN_IN}
          exact
        />
        <ProtectedRoute
          permitted={isAuthenticated}
          component={PageNotFound}
          redirectPath={ROUTES.SIGN_IN}
        />
      </Switch>
    </div>
  );
};

export default App;
