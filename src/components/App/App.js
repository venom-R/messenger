import React from 'react';
import Messenger from '../../screens/Messenger';
import './App.scss';

const App = props => {
  return (
    <div className="App" data-theme="light">
      <Messenger />
    </div>
  );
};

export default App;
