import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../components/ProtectedRoute';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Messenger from '../screens/Messenger';
import PageNotFound from '../screens/PageNotFound';

import { onAuthUserListener } from '../modules/auth/authSlice';
import { themeSelector } from './appSelectors';
import * as ROUTES from '../constants/routes';
import './App.scss';

const App = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onAuthUserListener());
  }, [dispatch]);

  return (
    <div className="App" data-theme={theme}>
      <Switch>
        <ProtectedRoute
          path={ROUTES.SIGN_IN}
          component={SignIn}
          permit={isAuthenticated => !isAuthenticated}
          redirectPath={ROUTES.HOME}
        />
        <ProtectedRoute
          path={ROUTES.SIGN_UP}
          component={SignUp}
          permit={isAuthenticated => !isAuthenticated}
          redirectPath={ROUTES.HOME}
        />
        <ProtectedRoute
          path={ROUTES.RESET_PASSWORD}
          component={ResetPassword}
          permit={isAuthenticated => !isAuthenticated}
          redirectPath={ROUTES.HOME}
        />
        <ProtectedRoute
          path={[ROUTES.HOME, ROUTES.FRIENDS, ROUTES.FAVORITES, ROUTES.ARCHIVED]}
          component={Messenger}
          permit={isAuthenticated => isAuthenticated}
          redirectPath={ROUTES.SIGN_IN}
          exact
        />
        <ProtectedRoute
          permit={isAuthenticated => isAuthenticated}
          component={PageNotFound}
          redirectPath={ROUTES.SIGN_IN}
        />
      </Switch>
    </div>
  );
};

export default App;
