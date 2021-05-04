import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import LogControl from './LogControl';
import Signin from './Signin';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <LogControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
