import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';

import { SystemProvider } from './context/SystemContext';
import RegisterWorkshop from './pages/RegisterWorkshop';
import WorkshopHome from './pages/WorkshopHome';
import UserHome from './pages/UserHome';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';


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
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/detail/:id" component={ServiceDetail} />
      </Switch>
    </SystemProvider>
  );
}

export default App;
