import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';

import { SystemProvider } from './context/SystemContext';
import RegisterWorkshop from './pages/RegisterWorkshop';
import WorkshopHome from './pages/WorkshopHome';
import UserHome from './pages/UserHome';

function App() {
  return (
    <SystemProvider>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register-user" component={RegisterUser} />
        <Route exact path="/register-workshop" component={RegisterWorkshop} />
        <Route exact path="/workshop/home" component={WorkshopHome} />
        <Route exact path="/user/home" component={UserHome} />
      </Switch>
    </SystemProvider>
  );
}

export default App;
