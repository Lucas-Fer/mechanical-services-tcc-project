import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';

import { SystemProvider } from './context/SystemContext';
import RegisterWorkshop from './pages/RegisterWorkshop';

function App() {
  return (
    <SystemProvider>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register-user" component={RegisterUser} />
        <Route exact path="/register-workshop" component={RegisterWorkshop} />
      </Switch>
    </SystemProvider>
  );
}

export default App;
