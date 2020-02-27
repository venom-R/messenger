import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Messenger from '../screens/Messenger';

import { themeSelector } from './appSelectors';
import * as ROUTES from '../constants/routes';
import './App.scss';

const App = props => {
  const theme = useSelector(themeSelector);
  return (
    <div className="App" data-theme={theme}>
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
        <Route path={ROUTES.HOME} component={Messenger} exact />
      </Switch>
    </div>
  );
};

export default App;
