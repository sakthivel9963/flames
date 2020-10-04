import React from 'react';
import { Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const UtilsRoute = () => (
  <>
    <Route
      path="/notfound"
      render={(props) => (
        <NotFound {...props} />
      )}
    />
  </>
);

export default UtilsRoute;
