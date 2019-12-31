import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../../screens/SignIn';
import Messenger from '../../screens/Messenger';
import * as ROUTES from '../../constants/routes';
import './App.scss';

const App = props => {
  return (
    <div className="App" data-theme="light">
      <SignIn />
      {/*<Switch>*/}
      {/*  <Route path={ROUTES.SIGN_IN} component={Login} exact />*/}
      {/*  <Route path={ROUTES.HOME} component={Messenger} />*/}
      {/*</Switch>*/}
    </div>
  );
};

export default App;
