import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NavBar from '../components/navbar/NavBar';

const UserRoute = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <>
            <NavBar />
            <Home {...props} />
          </>
        )}
      />
      <Route
        exact
        path="/about"
        render={(props) => (
          <>
            <NavBar />
            <About {...props} />
          </>
        )}
      />
      <Redirect to="/notfound" />
    </Switch>
  </div>
);

export default UserRoute;
